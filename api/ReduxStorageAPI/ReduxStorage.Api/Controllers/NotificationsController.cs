using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReduxStorage.Api.Models;
using ReduxStorage.Api.Models.Interfaces;

namespace ReduxStorage.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NotificationsController : ControllerBase
    {
        private readonly INotificationService _notificationService;
        public NotificationsController(INotificationService notificationService)
        {
            _notificationService = notificationService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _notificationService.GetNotificationsAsync());
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Notification notification)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _notificationService.CreateNotificationAsync(notification);

            return Ok(notification);
        }
    }
}
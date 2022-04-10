using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReduxStorage.Api.DTOS;
using ReduxStorage.Api.Models;
using ReduxStorage.Api.Models.Interfaces;

namespace ReduxStorage.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SalesController : ControllerBase
    {
        private readonly ISaleService _saleService;
        public SalesController(ISaleService saleService)
        {
            _saleService = saleService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                return Ok(await _saleService.GetSalesAsync());
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while getting all sales!");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Sale sale)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                await _saleService.CreateSaleAsync(sale);
                return Ok(sale);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while creating sale!");
            }
        }
    }
}
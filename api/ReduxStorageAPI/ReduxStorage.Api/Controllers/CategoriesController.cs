using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReduxStorage.Api.Models;
using ReduxStorage.Api.Models.Interfaces;

namespace ReduxStorage.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryService _categoryServices;
        public CategoriesController(ICategoryService categoryService)
        {
            _categoryServices = categoryService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                return Ok(await _categoryServices.GetAllCategoriesAsync());
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while getting all categories!");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Category category)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                await _categoryServices.CreateCategoryAsync(category);
                return Ok(category);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while getting all categories!");
            }
        }
    }
}

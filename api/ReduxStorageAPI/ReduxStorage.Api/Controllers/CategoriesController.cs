using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReduxStorage.Api.Exceptions;
using ReduxStorage.Api.Models;
using ReduxStorage.Api.Models.Interfaces;

namespace ReduxStorage.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                return Ok(await _categoryService.GetAllCategoriesAsync());
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while getting all categories!");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                return Ok(await _categoryService.ReadCategoryAsync(id));
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while getting category!");
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

                await _categoryService.CreateCategoryAsync(category);
                return Ok(category);
            }
            catch (RepeatedNameException)
            {
                return StatusCode(StatusCodes.Status409Conflict, "This category already exists!");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while getting all categories!");
            }
        }
    }
}

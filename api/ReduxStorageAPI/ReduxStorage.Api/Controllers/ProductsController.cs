using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReduxStorage.Api.DTOs;
using ReduxStorage.Api.Models;
using ReduxStorage.Api.Models.Interfaces;

namespace ReduxStorage.Api.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly ICategoryService _categoryService;
        public ProductsController(IProductService productService, ICategoryService categoryService)
        {
            _productService = productService;
            _categoryService = categoryService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                return Ok(await _productService.GetAllProductsAsync());
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while getting all products!");
            }
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ProductDTO productDTO)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var category = await _categoryService.ReadCategoryByName(productDTO.Category);

                if (category == null)
                {
                    return BadRequest("Category was not found!");
                }

                var product = new Product
                {
                    Name = productDTO.Name,
                    Category = category,
                    Quantity = productDTO.Quantity,
                    Price = productDTO.Price
                };

                await _productService.CreateProductAsync(product);

                return Ok(product);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while creating product!");
            }
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] ProductDTO productDTO)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var category = await _categoryService.ReadCategoryByName(productDTO.Category);

                if (category == null)
                {
                    return BadRequest("Category was not found!");
                }

                var productUpdated = new Product
                {
                    Id = (int)productDTO.Id,
                    Name = productDTO.Name,
                    Category = category,
                    Quantity = productDTO.Quantity,
                    Price = productDTO.Price
                };

                await _productService.UpdateProductAsync(productUpdated);
                return Ok(productUpdated);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while updating product!" + ex);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                return Ok(await _productService.DeleteProductAsync(id));
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while removing product!");
            }
        }
    }
}
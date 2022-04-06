using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReduxStorage.Api.Context;
using ReduxStorage.Api.Models;
using ReduxStorage.Api.Models.Interfaces;

namespace ReduxStorage.Api.Services
{
    public class ProductService : IProductService
    {
        private readonly AppDbContext _context;
        public ProductService(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Product>> GetAllProductsAsync() => await _context.Products.Include(x => x.Category).ToListAsync();

        public async Task<Product> CreateProductAsync(Product product)
        {
            if (product == null)
            {
                throw new NullReferenceException("Product cannot be null");
            }

            product.CreatedAt = DateTime.UtcNow;
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return product;
        }

        public Task<bool> DeleteProductAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<Product> ReadAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<Product> UpdateProductAsync(Product product)
        {
            throw new System.NotImplementedException();
        }
    }
}
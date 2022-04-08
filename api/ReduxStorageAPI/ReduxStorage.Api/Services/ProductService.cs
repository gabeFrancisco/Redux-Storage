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

        public async Task<bool> DeleteProductAsync(int id)
        {
            var result = await _context.Products.FirstOrDefaultAsync(x => x.Id == id);
            if (result == null)
            {
                return false;
            }

            _context.Products.Remove(result);
            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<Product> ReadAsync(int id)
        {
            return await _context.Products.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Product> UpdateProductAsync(Product product)
        {
            var result = await _context.Products
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.Id == product.Id);

            if (result == null)
            {
                return null;
            }
    
            product.CreatedAt = result.CreatedAt;
            product.UpdatedAt = DateTime.UtcNow;

            _context.Entry(product).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return product;
        }
    }
}
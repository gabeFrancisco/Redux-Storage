using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReduxStorage.Api.Context;
using ReduxStorage.Api.Models;
using ReduxStorage.Api.Models.Interfaces;

namespace ReduxStorage.Api.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly AppDbContext _context;
        public CategoryService(AppDbContext context)
        {
            _context = context;
        }
        public async Task<Category> CreateCategoryAsync(Category category)
        {

            if (category == null)
            {
                throw new NullReferenceException("Category cannot be null!");
            }

            category.CreatedAt = DateTime.UtcNow;

            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return category;
        }

        public Task<bool> DeleteCategoryAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IEnumerable<Category>> GetAllCategoriesAsync()
        {
            return await _context.Categories.ToListAsync();
        }

        public Task<Category> ReadCategoryAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<Category> UpdateCategoryAsync(Category category)
        {
            throw new System.NotImplementedException();
        }
    }
}
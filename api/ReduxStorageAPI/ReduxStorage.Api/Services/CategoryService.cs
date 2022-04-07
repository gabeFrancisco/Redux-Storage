using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReduxStorage.Api.Context;
using ReduxStorage.Api.Exceptions;
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
        public async Task<IEnumerable<Category>> GetAllCategoriesAsync() => await _context.Categories.ToListAsync();

        public async Task<Category> CreateCategoryAsync(Category category)
        {

            if (category == null)
            {
                throw new NullReferenceException("Category cannot be null!");
            }

            if (await this.CheckCategoryName(category.Name))
            {
                throw new RepeatedNameException("The given category name already exists!");
            }
            else
            {
                category.CreatedAt = DateTime.UtcNow;
                
                _context.Categories.Add(category);
                await _context.SaveChangesAsync();

                return category;
            }
        }

        public Task<bool> DeleteCategoryAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<Category> ReadCategoryAsync(int id)
        {
            return await _context.Categories.FirstOrDefaultAsync(x => x.Id == id);
        }

        public Task<Category> UpdateCategoryAsync(Category category)
        {
            throw new System.NotImplementedException();
        }

        public async Task<Category> ReadCategoryByName(string categoryName)
        {
            return await _context.Categories.SingleOrDefaultAsync(x => x.Name == categoryName);
        }

        public async Task<bool> CheckCategoryName(string categoryName)
        {
            var foundCategory = await this.ReadCategoryByName(categoryName);
            if (foundCategory != null)
            {
                return true;
            }
            return false;
        }
    }
}
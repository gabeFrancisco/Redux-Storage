using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReduxStorage.Api.Models.Interfaces
{
    public interface ICategoryService
    {
        Task<IEnumerable<Category>> GetAllCategoriesAsync();
        Task<Category> CreateCategoryAsync(Category category);
        Task<Category> ReadCategoryAsync(int id);
        Task<Category> UpdateCategoryAsync(Category category);
        Task<bool> DeleteCategoryAsync(int id);
        Task<Category> ReadCategoryByName(string categoryName);
        Task<bool> CheckCategoryName(string categoryName);
    }
}
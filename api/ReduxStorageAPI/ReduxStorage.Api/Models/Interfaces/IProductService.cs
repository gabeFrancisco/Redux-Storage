using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReduxStorage.Api.Models.Interfaces
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetAllProductsAsync();
        Task<Product> CreateProductAsync(Product product);
        Task<Product> ReadAsync(int id);
        Task<Product> UpdateProductAsync(Product product);
        Task<bool> DeleteProductAsync(int id);
    }
}
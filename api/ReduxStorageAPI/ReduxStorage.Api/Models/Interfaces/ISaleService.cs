using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReduxStorage.Api.Models.Interfaces
{
    public interface ISaleService
    {
        Task<IEnumerable<Sale>> GetSalesAsync();
        Task<Sale> CreateSaleAsync(Sale sale);
        Task<Sale> ReadSale(int id);
        Task<Sale> UpdateSale(Sale sale);
        Task<bool> RemoveSale(int id);
    }
}
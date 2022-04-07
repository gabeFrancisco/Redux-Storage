using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReduxStorage.Api.Models.Interfaces
{
    public interface ICustomerService
    {
        Task<IEnumerable<Customer>> GetAllCustomersAsync();
        Task<Customer> CreateCustomerAsync(Customer customer);
        Task<Customer> ReadCustomerAsync(int id);
        Task<Customer> UpdateCustomerAsync(Customer customer);
        Task<bool> RemoveCustomerAsync(int id);
    }
}
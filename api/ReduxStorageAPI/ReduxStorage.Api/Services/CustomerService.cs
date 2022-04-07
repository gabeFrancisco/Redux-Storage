using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReduxStorage.Api.Context;
using ReduxStorage.Api.Models;
using ReduxStorage.Api.Models.Interfaces;

namespace ReduxStorage.Api.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly AppDbContext _context;
        public CustomerService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Customer>> GetAllCustomersAsync() => await _context.Customers.ToListAsync();

        public async Task<Customer> CreateCustomerAsync(Customer customer)
        {
            if (customer == null)
            {
                throw new NullReferenceException("Customer cannot be null!");
            }

            customer.CreatedAt = DateTime.UtcNow;

            _context.Customers.Add(customer);
            await _context.SaveChangesAsync();

            return customer;
        }

        public Task<Customer> ReadCustomerAsync(int id)
        {
            return _context.Customers.FirstOrDefaultAsync(x => x.Id == id);
        }

        public Task<bool> RemoveCustomerAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<Customer> UpdateCustomerAsync(Customer customer)
        {
            throw new System.NotImplementedException();
        }
    }
}
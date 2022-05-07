using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReduxStorage.Api.Context;
using ReduxStorage.Api.Models;
using ReduxStorage.Api.Models.Interfaces;

namespace ReduxStorage.Api.Services
{
    public class SaleService : ISaleService
    {
        private readonly AppDbContext _context;
        public SaleService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Sale>> GetSalesAsync()
        {
            return await _context.Sales
                .Include(sale => sale.Customer)
                .Include(sale => sale.ProductOrders)
                .ThenInclude(pOrder => pOrder.Product)
                .ThenInclude(product => product.Category)
                .ToListAsync();
        }

        public async Task<Sale> CreateSaleAsync(Sale sale)
        {
            if (sale == null)
            {
                throw new NullReferenceException("Sale cannot be null");
            }

            if (sale.ProductOrders == null)
            {
                throw new InvalidOperationException("The sale must have at least one product!");
            }

            sale.CreatedAt = DateTime.UtcNow;

            _context.Sales.Add(sale);
            await _context.SaveChangesAsync();

            return sale;
        }

        public Task<Sale> ReadSale(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> RemoveSale(int id)
        {
            throw new System.NotImplementedException();
        }   

        public Task<Sale> UpdateSale(Sale sale)
        {
            throw new System.NotImplementedException();
        }
    }
}
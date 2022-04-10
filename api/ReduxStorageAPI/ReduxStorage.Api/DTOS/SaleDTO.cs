using System;
using System.Collections.Generic;
using ReduxStorage.Api.Models;

namespace ReduxStorage.Api.DTOS
{
    public class SaleDTO
    {
        public int? Id { get; set; }
        public string Customer { get; set; }
        public int? CustomerId { get; set; }
        public IEnumerable<ProductOrder> ProductOrders { get; set; }
        public decimal TotalValue { get; set; }
        public DateTime CreatedAT { get; set; }
    }
}
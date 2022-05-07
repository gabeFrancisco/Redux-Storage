using System.Collections.Generic;
using System.Linq;

namespace ReduxStorage.Api.Models
{
    public class Sale : BaseEntity
    {
        public int CustomerId { get; set; }
        public virtual Customer Customer { get; set; }
        public IEnumerable<ProductOrder> ProductOrders { get; set; }
        private decimal _totalValue;
        public decimal TotalValue
        {
            get { return _totalValue; }
            set
            {
                _totalValue = (value == 0M ? this.ProductOrders.Sum(x => x.TotalValue) : value);
            }
        }
    }
}
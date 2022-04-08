using System.Collections.Generic;
using System.Linq;

namespace ReduxStorage.Api.Models
{
    public class Sale : BaseEntity
    {
        public int CustomerId { get; set; }
        public virtual Customer Customer { get; set; }
        public IEnumerable<Product> Products { get; set; }
        private decimal _totalValue;
        public decimal TotalValue
        {
            get { return _totalValue; }
            set
            {
                _totalValue = this.Products.Sum(x => x.Price);
            }
        }
    }
}
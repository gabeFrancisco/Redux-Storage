namespace ReduxStorage.Api.Models
{
    public class ProductOrder : BaseEntity
    {
        public Product Product { get; set; }
        public int Quantity { get; set; }
        private decimal _totalValue;
        public decimal TotalValue
        {
            get { return this._totalValue; }
            set
            {
                _totalValue = this.Quantity * this.Product.Price;
            }
        }
    }
}
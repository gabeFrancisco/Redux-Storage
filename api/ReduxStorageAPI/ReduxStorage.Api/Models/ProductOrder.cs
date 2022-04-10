namespace ReduxStorage.Api.Models
{
    public class ProductOrder : BaseEntity
    {
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
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
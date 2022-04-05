namespace ReduxStorage.Api.Models
{
    public class Product : BaseEntity 
    {
        public string Name { get; set; }
        public virtual Category Category { get; set; }
        public int CategoryId { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}   
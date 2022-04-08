namespace ReduxStorage.Api.Models
{
    public class Notification : BaseEntity
    {
        public string Title { get; set; }
        public string Message { get; set; }
        public string Color { get; set; }
    }
}
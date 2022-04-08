using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReduxStorage.Api.Models.Interfaces
{
    public interface INotificationService
    {
         Task<IEnumerable<Notification>> GetNotificationsAsync();
         Task<Notification> CreateNotificationAsync(Notification notification);
    }
}
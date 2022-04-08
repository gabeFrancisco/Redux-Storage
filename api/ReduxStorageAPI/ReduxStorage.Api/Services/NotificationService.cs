using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReduxStorage.Api.Context;
using ReduxStorage.Api.Models;
using ReduxStorage.Api.Models.Interfaces;

namespace ReduxStorage.Api.Services
{
    public class NotificationService : INotificationService
    {
        private readonly AppDbContext _context;
        public NotificationService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Notification>> GetNotificationsAsync()
        {
            return await _context.Notifications.ToListAsync();
        }
        public async Task<Notification> CreateNotificationAsync(Notification notification)
        {
            if (notification == null)
            {
                throw new NullReferenceException("Notification cannot be null!");
            }

            _context.Notifications.Add(notification);
            await _context.SaveChangesAsync();

            return notification;
        }
    }
}
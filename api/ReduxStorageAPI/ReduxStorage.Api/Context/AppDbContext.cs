using Microsoft.EntityFrameworkCore;
using ReduxStorage.Api.Models;

namespace ReduxStorage.Api.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }

    }
}

using JewelryBack.Entitites;
using JewelryBack.Entitites.Orders;
using Microsoft.EntityFrameworkCore;

namespace JewelryBack.Data.Database;

public sealed class DataContext(DbContextOptions<DataContext> options)
    : DbContext(options)
{
    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfigurationsFromAssembly(GetType().Assembly);
    }

    public DbSet<Manager> Managers { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<Order> Orders { get; set; }
}
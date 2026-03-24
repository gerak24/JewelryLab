using JewelryBack.Entitites.Orders;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JewelryBack.Data.Database.Configurations;

public class OrderProductConfig :IEntityTypeConfiguration<OrderProduct>
{
    public void Configure(EntityTypeBuilder<OrderProduct> builder)
    {
        builder.ToTable("OrderProducts");

        builder.Property(typeof(int), "Id");
        builder.HasKey("Id");
        builder.Property(o => o.OrderId).IsRequired();
        builder.Property(o => o.ProductId).IsRequired();
        builder.Property(o => o.Name).IsRequired();
        builder.Property(o => o.Price).IsRequired();
        builder.Property(o => o.Amount).IsRequired();
        builder.Property(o => o.Type).IsRequired();
    }
}
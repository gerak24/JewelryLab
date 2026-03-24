using JewelryBack.Entitites.Orders;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JewelryBack.Data.Database.Configurations;

public class OrderConfig : DomainObjectConfig<Order>
{
    public override void Configure(EntityTypeBuilder<Order> builder)
    {
        base.Configure(builder);
        builder.ToTable("Orders");

        builder.HasKey(o => o.Id);
        builder.Property(o => o.Number).IsRequired();
        builder.Property(o => o.Sum).IsRequired();
        builder.Property(o => o.Contact).IsRequired();
        builder.Property(o => o.Customer).IsRequired();
        builder.Property(o => o.Created).IsRequired();

        builder.HasIndex(order => order.Number);
    }
}
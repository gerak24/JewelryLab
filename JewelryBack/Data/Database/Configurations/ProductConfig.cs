using JewelryBack.Entitites;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JewelryBack.Data.Database.Configurations;

public class ProductConfig : DomainObjectConfig<Product>
{
    public override void Configure(EntityTypeBuilder<Product> builder)
    {
        base.Configure(builder);
        builder.ToTable("Products");
        
        builder.Property(x => x.Name);
        builder.Property(x => x.Description);
        builder.Property(x => x.Image);
        builder.Property(x => x.Price);
        builder.Property(x => x.Type);
        builder.Property(x => x.IsHotOffer);
        builder.Property(x => x.IsDeleted);
    }
}
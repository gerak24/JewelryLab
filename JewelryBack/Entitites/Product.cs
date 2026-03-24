namespace JewelryBack.Entitites;

public class Product : Entity
{
    protected Product() // EF migrations building
    {
    }

    public Product(Guid id, string name, string description, string image, ProductType type, decimal price,
        bool isHotOffer) : base(id)
    {
        Name = name;
        Description = description;
        Image = image;
        Type = type;
        Price = price;
        IsHotOffer = isHotOffer;
    }

    public string Name { get; set; }
    public string Description { get; set; }
    public string Image { get; set; }
    public ProductType Type { get; set; }
    public decimal Price { get; set; }
    public bool IsHotOffer { get; set; }
    public bool IsDeleted { get; set; }
}
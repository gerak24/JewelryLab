namespace JewelryBack.Entitites.Orders;

public class OrderProduct
{
    protected OrderProduct() // EF migrations building
    {
    }

    public OrderProduct(Guid productId, string name, ProductType type, decimal price, decimal amount, Guid orderId)
    {
        ProductId = productId;
        Name = name;
        Type = type;
        Price = price;
        Amount = amount;
        OrderId = orderId;
    }

    public Guid OrderId { get; set; }
    public Guid ProductId { get; set; }
    public string Name { get; set; }
    public ProductType Type { get; set; }
    public decimal Price { get; set; }
    public decimal Amount { get; set; }
}
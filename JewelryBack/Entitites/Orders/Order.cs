namespace JewelryBack.Entitites.Orders;

public class Order : Entity
{
    protected Order() // EF migrations building
    {
    }

    public Order(Guid id, int number, decimal sum, string contact, string customer,
        List<OrderProduct> products, bool isPaid = false, bool isPassed = false) : base(id)
    {
        Number = number;
        Sum = sum;
        Contact = contact;
        Customer = customer;
        Products = products;
        Created = DateTime.UtcNow;
        IsPaid = isPaid;
        IsPassed = isPassed;
    }

    public int Number { get; set; }
    public decimal Sum { get; set; }
    public IEnumerable<OrderProduct> Products { get; set; }
    public string Contact { get; set; }
    public string Customer { get; set; }
    public DateTime Created { get; private set; } = DateTime.UtcNow;
    public bool IsPaid { get; private set; }
    public bool IsPassed { get; private set; }

    public void Pay()
    {
        IsPaid = !IsPaid;
    }

    public void Pass()
    {
        IsPassed = !IsPassed;
    }
}
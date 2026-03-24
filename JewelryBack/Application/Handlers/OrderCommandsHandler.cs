using JewelryBack.Application.Commands.Order;
using JewelryBack.Application.Helpers;
using JewelryBack.Data;
using JewelryBack.Data.Database;
using JewelryBack.Entitites.Orders;

namespace JewelryBack.Application.Handlers;

public class OrderCommandsHandler(DataContext dbContext, IConfiguration configuration)
{
    private readonly string _key = configuration.GetValue<string>("aes:key") ??
                                   throw new BusinessException("В конфигурации не задан ключ для шифрования");

    private readonly string _iv = configuration.GetValue<string>("aes:iv") ??
                                  throw new BusinessException("В конфигурации не задан IV ключ для шифрования");

    public async Task<string> Create(CreateOrderCommand cmd)
    {
        var contactHash = Encryptor.EncryptString_Aes(cmd.Contact, _key, _iv);
        var id = Guid.NewGuid();
        var num = dbContext.Orders.Count() + 1;
        await dbContext.Orders.AddAsync(new Order(id, num,
            CalculateSum(cmd.Products), contactHash, cmd.Customer, MapProducts(cmd.Products, id)));
        await dbContext.SaveChangesAsync();
        return num.ToString();
    }

    public IEnumerable<Order> GetOrders()
    {
        var list = dbContext.Orders.Select(order =>
            new Order(order.Id,
                order.Number,
                order.Sum,
                Encryptor.DecryptString_Aes(order.Contact, _key, _iv).Replace("\n", ""),
                order.Customer,
                order.Products.ToList(),
                order.IsPaid,
                order.IsPassed)
        ).ToList();

        return list;
    }

    public Order GetOrder(Guid id)
    {
        var order = dbContext.Orders.FirstOrDefault(order => order.Id == id) ??
                    throw new EntityNotFoundException($"Не найден заказ с идентификатором: {id}");
        order.Contact = Encryptor.DecryptString_Aes(order.Contact, _key, _iv).Replace("\n", "");
        return order;
    }

    public async Task<Order> PayOrder(Guid id)
    {
        var order = dbContext.Orders.FirstOrDefault(order => order.Id == id) ??
                    throw new EntityNotFoundException($"Не найден заказ с идентификатором: {id}");
        order.Pay();
        await dbContext.SaveChangesAsync();
        return order;
    }

    public async Task<Order> PassOrder(Guid id)
    {
        var order = dbContext.Orders.FirstOrDefault(order => order.Id == id) ??
                    throw new EntityNotFoundException($"Не найден заказ с идентификатором: {id}");
        order.Pass();
        await dbContext.SaveChangesAsync();
        return order;
    }

    public Order GetOrder(int num)
    {
        var order = dbContext.Orders.FirstOrDefault(order => order.Number == num) ??
                    throw new EntityNotFoundException($"Не найден заказ с номером: {num}");
        order.Contact = "***";
        order.Customer = "***";
        return order;
    }


    private decimal CalculateSum(IEnumerable<OrderProduct> products)
    {
        decimal sum = 0;
        foreach (var product in products)
        {
            if (dbContext.Products.All(x => x.Id != product.ProductId))
                throw new BusinessException("Указанный товар не числится в базе данных.");
            sum += product.Price * product.Amount;
        }

        return sum;
    }

    private List<OrderProduct> MapProducts(IEnumerable<OrderProduct> products, Guid id) => products
        .Select(x => new OrderProduct(x.ProductId, x.Name, x.Type, x.Price, x.Amount, id)).ToList();
}
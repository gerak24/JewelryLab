using JewelryBack.Entitites.Orders;

namespace JewelryBack.Application.Commands.Order;

public record CreateOrderCommand(IEnumerable<OrderProduct> Products, string Customer, string Contact, string? Comment);
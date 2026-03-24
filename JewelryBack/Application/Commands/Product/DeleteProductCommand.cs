namespace JewelryBack.Application.Commands.Product;

public record DeleteProductCommand(Guid Id, bool IsSoftDelete);
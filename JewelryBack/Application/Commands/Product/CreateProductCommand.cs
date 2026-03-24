using JewelryBack.Entitites;

namespace JewelryBack.Application.Commands.Product;

public record CreateProductCommand(string Name, string Description, string Image, ProductType Type, decimal Price,
    bool IsHotOffer);
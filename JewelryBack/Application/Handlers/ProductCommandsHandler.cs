using JewelryBack.Application.Commands.Product;
using JewelryBack.Data;
using JewelryBack.Data.Database;
using JewelryBack.Entitites;
using Microsoft.EntityFrameworkCore;

namespace JewelryBack.Application.Handlers;

public class ProductCommandsHandler(DataContext dbContext)
{
    public async Task<string> UpdateProduct(UpdateProductCommand cmd)
    {
        var product = await dbContext.Products.FirstOrDefaultAsync(x => x.Id == cmd.Id) ??
                      throw new BusinessException("Продукт не найден");

        product.Name = cmd.Name ?? product.Name;
        product.Description = cmd.Description ?? product.Description;
        product.Type = cmd.Type ?? product.Type;
        product.Price = cmd.Price ?? product.Price;
        product.Image = cmd.Image ?? product.Image;
        product.IsHotOffer = cmd.IsHotOffer ?? product.IsHotOffer;
        product.IsDeleted = cmd.IsDeleted ?? product.IsDeleted;
        dbContext.Update(product);

        await dbContext.SaveChangesAsync();
        return "Продукт обновлен";
    }

    public async Task<string> DeleteProduct(DeleteProductCommand cmd)
    {
        var product = await dbContext.Products.FirstOrDefaultAsync(x => x.Id == cmd.Id) ??
                      throw new BusinessException("Продукт не найден");

        switch (cmd.IsSoftDelete)
        {
            case true:
                product.IsDeleted = true;
                dbContext.Products.Update(product);
                break;

            case false:
                dbContext.Products.Remove(product);
                break;
        }

        await dbContext.SaveChangesAsync();
        return "Продукт удален";
    }


    public async Task<string> CreateProduct(CreateProductCommand cmd)
    {
        await dbContext.Products.AddAsync(new Product(Guid.NewGuid(), cmd.Name, cmd.Description, cmd.Image,
            cmd.Type,
            cmd.Price, cmd.IsHotOffer));

        await dbContext.SaveChangesAsync();
        return "Продукт создан";
    }

    public IEnumerable<Product> GetDeletedProducts() => dbContext.Products.Where(x => x.IsDeleted == true).ToList();

    public IEnumerable<Product> GetProducts(bool showDeleted = false) =>
        showDeleted ? dbContext.Products : dbContext.Products.Where(x => x.IsDeleted != true).ToList();
}
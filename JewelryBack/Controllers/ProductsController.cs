using JewelryBack.Application.Commands.Product;
using JewelryBack.Application.Handlers;
using JewelryBack.Data.Database;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JewelryBack.Controllers;

[Authorize]
public class ProductsController(DataContext dbContext) : ApiController
{
    private ProductCommandsHandler Handler { get; } = new(dbContext);

    [HttpGet]
    [AllowAnonymous]
    public IActionResult GetProducts(bool showDeleted = false)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(Handler.GetProducts(showDeleted));
    }

    [HttpGet("[action]")]
    [AllowAnonymous]
    public IActionResult GetText()
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        Thread.Sleep(7000);
        return Ok(new
        {
            text1 = "ВРЕМЯ РАБОТЫ: Ежедневно \n с 12.00 до 22.00",
            text2 = "Chicko - Вкус Кореи \n  +7(863) 301 - 35 - 00",
        });
    }

    [HttpGet("[action]")]
    public IActionResult GetDeleted()
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(Handler.GetDeletedProducts());
    }

    [HttpPost]
    public async Task<IActionResult> SaveProduct(CreateProductCommand cmd)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(await Handler.CreateProduct(cmd));
    }

    [HttpPut]
    public async Task<IActionResult> UpdateProduct(UpdateProductCommand cmd)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(await Handler.UpdateProduct(cmd));
    }

    [HttpDelete]
    public async Task<IActionResult> DeleteProduct(DeleteProductCommand cmd)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(await Handler.DeleteProduct(cmd));
    }
}
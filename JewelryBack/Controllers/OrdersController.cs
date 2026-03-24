using JewelryBack.Application.Commands.Order;
using JewelryBack.Application.Handlers;
using JewelryBack.Data.Database;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JewelryBack.Controllers;

[Authorize]
public class OrdersController(DataContext dbContext, IConfiguration configuration) : ApiController
{
    private OrderCommandsHandler Handler { get; } = new(dbContext, configuration);

    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> CreateOrder(CreateOrderCommand cmd)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(await Handler.Create(cmd));
    }

    [HttpGet]
    public IActionResult GetOrders()
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(Handler.GetOrders());
    }


    [HttpGet("{orderId:guid}")]
    public IActionResult GetOrder(Guid orderId)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(Handler.GetOrder(orderId));
    }


    [HttpPost("[action]/{orderId:guid}")]
    public async Task<IActionResult> PayOrder(Guid orderId)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(await Handler.PayOrder(orderId));
    }


    [HttpPost("[action]/{orderId:guid}")]
    public async Task<IActionResult> PassOrder(Guid orderId)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(await Handler.PassOrder(orderId));
    }

    [HttpGet("[action]/{num:int}")]
    [AllowAnonymous]
    public IActionResult GetOrderByNum(int num)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(Handler.GetOrder(num));
    }
}
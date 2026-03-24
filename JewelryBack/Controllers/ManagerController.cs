using JewelryBack.Application.Commands.Manager;
using JewelryBack.Application.Handlers;
using JewelryBack.Data;
using JewelryBack.Data.Database;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JewelryBack.Controllers;

public class ManagerController(DataContext dbContext, IConfiguration configuration) : ApiController
{
    private ManagerCommandsHandler Handler { get; } = new(dbContext, configuration);

    [HttpPost("[action]")]
    public async Task<IActionResult> Register(RegisterManagerCommand cmd)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var userId = Guid.Parse(HttpContext.User.Identity?.Name ?? throw new BusinessException("Возникли проблемы авторизации"));
        return Ok(await Handler.RegisterAsync(userId, cmd));
    }

    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> Authorize(AuthorizationCommand cmd)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(await Handler.AuthorizeAsync(cmd));
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> ChangePassword(ChangePassCommand cmd)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var userId = HttpContext.User.Identity?.Name;
        return Ok(await Handler.ChangePasswordAsync(userId, cmd));
    }
}
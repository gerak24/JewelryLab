using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using JewelryBack.Application.Commands.Manager;
using JewelryBack.Application.Helpers;
using JewelryBack.Data;
using JewelryBack.Data.AuthConfiguration;
using JewelryBack.Data.Database;
using JewelryBack.Entitites;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace JewelryBack.Application.Handlers;

public class ManagerCommandsHandler(DataContext dbContext, IConfiguration configuration)
{
    private readonly string _salt = configuration["Salt"] ?? throw new BusinessException("В конфигурации не задана соль для паролей");
    private readonly string _owner = configuration["adminLogin"] ?? throw new BusinessException("В конфигурации не задан логин суперадмина");
    private DataContext DbContext { get; } = dbContext;

    public async Task<string> RegisterAsync(Guid userId, RegisterManagerCommand cmd)
    {
        var user = await DbContext.Managers.FirstOrDefaultAsync(x => x.Id == userId) ?? throw new EntityNotFoundException("Продукт не найден в базе данных");
        if (user.Login != _owner) throw new BusinessException("У вас нет прав регистрировать новых сотрудников");
        var passHash = Hasher.Create(cmd.Password, _salt);
        if (DbContext.Managers.Any(x => x.Login == cmd.Login))
            throw new BusinessException("Работник с таким логином уже существует");
        await DbContext.Managers.AddAsync(new Manager(Guid.NewGuid(), cmd.Login, passHash));
        await DbContext.SaveChangesAsync();
        return "Пользователь зарегистрирован";
    }

    public async Task<string> AuthorizeAsync(AuthorizationCommand cmd)
    {
        var user = await DbContext.Managers.FirstOrDefaultAsync(x => x.Login == cmd.Login);
        if (user == null) throw new BusinessException("Пользователя с таким логином не существует");
        if (!Hasher.Validate(cmd.Password, _salt, user.PassHash)) throw new BusinessException("Пароль не верен");
        return GetToken(user);
    }

    public async Task<string> ChangePasswordAsync(string? userId, ChangePassCommand cmd)
    {
        var id = Guid.Parse(userId ?? throw new BusinessException("Возникли проблемы авторизации"));
        var user = DbContext.Managers.FirstOrDefault(x => x.Id == id) ?? throw new EntityNotFoundException("Возникли проблемы авторизации");
        if (!Hasher.Validate(cmd.OldPassword, _salt, user.PassHash))
            throw new BusinessException("Указан неверный старый пароль");

        user.PassHash = Hasher.Create(cmd.NewPassword, _salt);
        DbContext.Managers.Update(user);
        await DbContext.SaveChangesAsync();
        return "Пароль изменен";
    }

    private string GetToken(Manager account)
    {
        var claims = new[]
        {
            new Claim(ClaimsIdentity.DefaultNameClaimType, account.Id.ToString())
        };
        var identity = new ClaimsIdentity(claims, "Token");
        var now = DateTime.UtcNow;
        var sCred = new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256);
        var jwt = new JwtSecurityToken(
            issuer: AuthOptions.Issuer,
            audience: AuthOptions.Audience,
            notBefore: now,
            claims: identity.Claims,
            expires: now.Add(TimeSpan.FromMinutes(AuthOptions.Lifetime)),
            signingCredentials: sCred);

        return new JwtSecurityTokenHandler().WriteToken(jwt);
    }
}
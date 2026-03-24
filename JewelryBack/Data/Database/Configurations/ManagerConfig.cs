using JewelryBack.Application.Helpers;
using JewelryBack.Entitites;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JewelryBack.Data.Database.Configurations;

public class ManagerConfig(IConfiguration configuration) : DomainObjectConfig<Manager>
{
    private readonly string _ownerLogin = configuration["adminLogin"] ??
                                          throw new BusinessException("Не задан логин администратора в конфигурации");

    private readonly string _ownerPass = configuration["adminPassword"] ??
                                         throw new BusinessException("Не задан пароль администратора в конфигурации");

    private readonly string _salt = configuration["salt"] ??
                                    throw new BusinessException("В конфигурации не задана соль для паролей");


    public override void Configure(EntityTypeBuilder<Manager> builder)
    {
        base.Configure(builder);
        builder.ToTable("Managers");
        
        builder.Property(x => x.Login);
        builder.Property(x => x.PassHash);

        builder.HasData(new Manager(Guid.NewGuid(), _ownerLogin, Hasher.Create(_ownerPass, _salt)));
    }
}
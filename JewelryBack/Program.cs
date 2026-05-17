using System.Net;
using JewelryBack.Data;
using JewelryBack.Data.AuthConfiguration;
using JewelryBack.Data.Database;
using Hellang.Middleware.ProblemDetails;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

#region Database

var dbConnString = $"Host={builder.Configuration.GetValue<string>("db:host")};" +
                   $"Port={builder.Configuration.GetValue("db:port", 5432)};" +
                   $"Database={builder.Configuration.GetValue<string>("db:name")};" +
                   $"Username={builder.Configuration.GetValue<string>("db:login")};" +
                   $"Password={builder.Configuration.GetValue<string>("db:password")};";

_ = builder.Configuration.GetValue<string>("aes:key") ??
    throw new BusinessException("Отсутствует Key для AES шифрования");
_ = builder.Configuration.GetValue<string>("aes:iv") ??
    throw new BusinessException("Отсутствует IV Key для AES шифрования");

builder.Services.AddDbContext<DataContext>(dbBuilder =>
    dbBuilder.UseNpgsql(dbConnString));

#endregion

#region Other stuff

// Configure proxy
builder.Services.Configure<ForwardedHeadersOptions>(options =>
{
    options.ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
    options.RequireHeaderSymmetry = false;
    options.ForwardLimit = 10;
    options.KnownProxies.Clear();
    options.KnownNetworks.Clear();
});

#endregion

#region ProblemDetails

builder.Services.AddProblemDetails(options =>
{
    options.Map<BusinessException>(exception =>
        new ProblemDetails
        {
            Title = exception.Message,
            Status = (int)HttpStatusCode.BadRequest,
            Type = "https://schema.jewlab.api/problems",
        });
    options.Map<EntityNotFoundException>(exception =>
        new ProblemDetails
        {
            Title = exception.Message,
            Status = (int)HttpStatusCode.NotFound,
            Type = "https://schema.jewlab.api/problems/404"
        });
});

#endregion

#region Auth

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.RequireHttpsMetadata = false;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = AuthOptions.Issuer,
            ValidateAudience = true,
            ValidAudience = AuthOptions.Audience,
            ValidateLifetime = true,
            IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
            ValidateIssuerSigningKey = true,
        };
    });

#endregion

builder.Services.AddHttpContextAccessor();
builder.Services.AddControllers();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseCors(cors => cors.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
}

using (var serviceScope = app.Services
           .GetRequiredService<IServiceScopeFactory>()
           .CreateScope())
{
    using (var context = serviceScope.ServiceProvider.GetService<DataContext>() ??
                         throw new BusinessException("Failed to migrate db"))
    {
        context.Database.Migrate();
    }
}

app.UseForwardedHeaders();
app.UseRouting();
app.UseProblemDetails();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();
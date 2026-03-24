using System.Text.Json.Serialization;

namespace JewelryBack.Entitites;
[JsonConverter(typeof(JsonStringEnumConverter))]
public enum ProductType
{
    Services,
    Products
}
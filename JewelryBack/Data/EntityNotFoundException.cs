namespace JewelryBack.Data;

public class EntityNotFoundException : Exception
{
    public EntityNotFoundException(string? message = null)
        : base(message ?? "Продукт не найден в базе данных")
    {
    }
}
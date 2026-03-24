namespace JewelryBack.Entitites;

public abstract class Entity
{
    public Guid Id { get; init; }

    protected Entity() // EF migrations building
    {
    }

    protected Entity(Guid id) => Id = id;
}
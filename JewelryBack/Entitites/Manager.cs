namespace JewelryBack.Entitites;

public class Manager : Entity
{
    protected Manager() // EF migrations building
    {
    }

    public Manager(Guid id, string login, string passHash) : base(id)
    {
        Login = login;
        PassHash = passHash;
    }

    public string Login { get; init; }
    public string PassHash { get; set; }
}
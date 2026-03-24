namespace JewelryBack.Application.Commands.Manager;

public record ChangePassCommand(string OldPassword, string NewPassword);
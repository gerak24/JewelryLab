using System.Security.Cryptography;
using System.Text;

namespace JewelryBack.Application.Helpers;

public class Encryptor
{
    public static string EncryptString_Aes(string plainText, string key, string iv)
    {
        using var aesAlg = Aes.Create();
        aesAlg.IV = GetIv(iv);
        aesAlg.Key = GetKey(key);
        
        using var outEncrypt = new MemoryStream();
        var encStream = new CryptoStream(outEncrypt, aesAlg.CreateEncryptor(aesAlg.Key, aesAlg.IV), CryptoStreamMode.Write);
        using (StreamWriter encryptWriter = new(encStream))
        {
            encryptWriter.WriteLine(plainText);
        }
        
        return Convert.ToBase64String(outEncrypt.ToArray());
    }

    public static string DecryptString_Aes(string cipherText, string key, string iv)
    {
        using var aesAlg = Aes.Create();
        aesAlg.IV = GetIv(iv);
        aesAlg.Key = GetKey(key);
  
      
        var decryptor = aesAlg.CreateDecryptor(aesAlg.Key, aesAlg.IV);

        using var msDecrypt = new MemoryStream(Convert.FromBase64String(cipherText));
        using var csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read);
        using var srDecrypt = new StreamReader(csDecrypt);

        return srDecrypt.ReadToEnd();
    }

    private static byte[] GetIv(string ivSecret)
        => MD5.HashData(Encoding.UTF8.GetBytes(ivSecret));


    private static byte[] GetKey(string key)
        => SHA256.HashData(Encoding.UTF8.GetBytes(key));
}
using static System.Runtime.InteropServices.JavaScript.JSType;

static string createPhoneNumber(int[] numbers)
{
    string phoneNumber = "(";
    for (int i = 0; i < 10; i++)
    {
        if (i == 2)
        {
            phoneNumber += (numbers[i] + ") ");
        }
        else if (i == 5)
        {
            phoneNumber += (numbers[i] + "-");
        }
        else
        {
            phoneNumber += numbers[i];
        }
    }
    return phoneNumber;
}

Console.WriteLine("Veuillez saisir le Numero de telephone: ");
string numbers = Console.ReadLine();

if (numbers is not null && numbers.Length == 10)
{
    int[] tabNumb = new int[numbers.Length];

    for (int i = 0; i < 10; i++)
    {
        int nb = (int)Char.GetNumericValue(numbers[i]);
        tabNumb[i] = nb;
    }
    string formatPhoneNumber = createPhoneNumber(tabNumb);
    Console.WriteLine(formatPhoneNumber);
}
else
{
    Console.WriteLine("Nombre d'element trop petit !");
}
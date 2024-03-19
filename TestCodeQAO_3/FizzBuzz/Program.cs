namespace FizzBuzz
{
    internal class Program
    {
        static void Main(string[] args)
        {
            static List<string> fizzBuzz(int n)
            {
                List<string> tabResultNumber = [];
                int i = 1;
               
                while (i <= n)
                {
                    if (i % 3 == 0 && i % 5 == 0)
                    {
                        tabResultNumber.Add("FizzBuzz");
                    }
                    else if (i % 3 == 0)
                    {
                        tabResultNumber.Add("Fizz");
                    }
                    else if (i % 5 == 0)
                    {
                        tabResultNumber.Add("Buzz");
                    }
                    else
                    {
                        tabResultNumber.Add(Convert.ToString(i));
                    }
                    i++;
                }
                return tabResultNumber;
            }
            List<string> strings = new List<string>();
            Console.WriteLine("Veuillez saisir un nombre entier :");
            string? val = Console.ReadLine();

            strings = fizzBuzz(Convert.ToInt32(val));

            Console.WriteLine("Nmbre :"+strings.Count);
            for (int i = 0; i < strings.Count; i++)
            {
                Console.WriteLine(strings[i]);
            }
        }
    }
}

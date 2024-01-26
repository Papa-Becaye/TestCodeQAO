using System.Security.Cryptography.X509Certificates;

namespace Convertion
{
    class Program
    {
        static void Main(string[] args)
        {
            static string convertToHexa(int number)
            {
                if(number > 255)
                {
                    number = 255;
                }
                else if(number < 0) {
                    number = 0;
                }
                List<int> modul = [];
               
                string toHexa = "";
                int i = 0;
                int quotient = (int)(number / 16);
                int rest = number % 16;

                modul.Add(rest);
                while( quotient != 0 ) {
                    modul.Add(quotient % 16);
                    quotient = (int)(quotient / 16);
                    i++;
                }
                if(modul.Count == 1 ) {
                    toHexa = "0";
                }

                for(i = modul.Count - 1; i >= 0 ; i--) {
                    if (modul[i] == 10) {
                        toHexa += "A";
                    }else if (modul[i] == 11)
                    {
                        toHexa += "B";
                    }else if (modul[i] == 12)
                    {
                        toHexa += "C";
                    }else if (modul[i] == 13)
                    {
                        toHexa += "D";
                    }else if (modul[i] == 14)
                    {
                        toHexa += "E";
                    }else if (modul[i] == 15)
                    {
                        toHexa += "F";
                    }else { toHexa += modul[i];}
                }
                return toHexa;
            }
            static string rgb(int r, int g, int b)
            {
                string red = convertToHexa(r), green = convertToHexa(g), blue = convertToHexa(b);
                return (red + green + blue);
            }

            string hexaColorConvert = rgb(255, 255, 255);
            Console.WriteLine(hexaColorConvert);
        }
    }
}

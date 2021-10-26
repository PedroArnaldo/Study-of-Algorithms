using System;

namespace _4_A_
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Conversor de temperatura!");

            float temperaturaCelso;
            float temperaturaFahrenheit;

            Console.WriteLine("Digite a temperatura em celsius: ");

            temperaturaCelso = float.Parse(Console.ReadLine());

            temperaturaFahrenheit = temperaturaCelso * 9 / 5 + 32;
            
            Console.WriteLine(temperaturaFahrenheit);
    
        }
    }
}

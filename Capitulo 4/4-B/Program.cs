using System;

namespace _4_B
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Conversor de temperatura de Fahrenheit para Celsius");

            float temperaturaCelsius;
            float temperaturaFahrenheit;

            temperaturaFahrenheit = float.Parse(Console.ReadLine());

            temperaturaCelsius = ((temperaturaFahrenheit - 32) * 5)/9;


            Console.WriteLine(temperaturaCelsius);
        }
    }
}

using System;

namespace _4_C
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Cálculo do volume do cilindro");

            double volume;
            double raio;
            double altura;
            const double pi = 3.14159;

            Console.WriteLine("Digite o raio: ");
            raio = float.Parse(Console.ReadLine());

            Console.WriteLine("Digite o altura");
            altura = float.Parse(Console.ReadLine());

            volume = pi * Math.Pow(raio, 2) * altura;

            Console.WriteLine(volume.ToString("F"));
        }
    }
}

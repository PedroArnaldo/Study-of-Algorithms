using System;

namespace _4_D
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Calculadora de litros de gasto de combustível");

            float distancia;
            float litrosUsados;
            float quilometrosLitros;

            Console.WriteLine("Digite  a distância em KM: ");
            distancia = float.Parse(Console.ReadLine());

            Console.WriteLine("Digite o litros/km que o carro faz: ");
            quilometrosLitros = float.Parse(Console.ReadLine());
        

            litrosUsados = distancia / quilometrosLitros;

            Console.WriteLine($"Litros usados {litrosUsados}");

        }
    }
}

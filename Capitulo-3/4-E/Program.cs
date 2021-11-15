using System;

namespace _4_E
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Cálculo Prestação");

            float prestacao; 
            float valor1;
            float taxa;
            float tempo;

            Console.WriteLine("Digite o valor da prestacao: ");
            valor1 = float.Parse(Console.ReadLine());

            Console.WriteLine("Digite o tempo de atraso da prestação(em dias): ");
            tempo = float.Parse(Console.ReadLine());

            Console.WriteLine("Digite a taxa do juros(em porcentagem. EX.: 10% -> 10): ");
            taxa = float.Parse(Console.ReadLine());

            prestacao = valor1 + (valor1 * (taxa/100) * tempo);

            Console.WriteLine($"O valor final R${prestacao}");
        }
    }
}

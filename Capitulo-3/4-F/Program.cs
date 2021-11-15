using System;

namespace _4_F
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Troca Valor:");

            float a;
            float b;
            float aux;

            Console.WriteLine("Digite o valor de a: ");
            a = float.Parse(Console.ReadLine());

            Console.WriteLine("Digite o valor de b: ");
            b = float.Parse(Console.ReadLine());

             aux = a;
             a =  b;
             b = aux;

             Console.WriteLine($"O valor de A = {a}, B = {b}");
        }
    }
}

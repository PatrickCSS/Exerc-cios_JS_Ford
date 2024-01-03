//1* Escreva     um     programa que leia     as     medidas     dos     lados     de     um     triângulo     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno. 
// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.

//Uma *class* JavaScript não é um objeto é um modelo para objetos JavaScript.
// Os métodos de classe estáticos são definidos na própria classe.
//Você não pode chamar um static método em um objeto, apenas em uma classe de objeto.
//A classe *string* é um objeto que representa uma sequência de caracteres. Strings são utilizadas para armazenar e manipular textro

//entrada de dados
// = informar as 3 medidas de um triangulo

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 

//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console


public class Triangulo {
    public static void main(number[]) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o comprimento do lado A do :triângulo");
        double ladoA = scanner.nextDouble();

        System.out.println("Digite o comprimento do lado B do triângulo:");
        double ladoB = scanner.nextDouble();

        System.out.println("Digite o comprimento do lado C do triângulo:");
        double ladoC = scanner.nextDouble();

        if (ladoA == ladoB && ladoB == ladoC) {
            System.out.println("Triângulo Equilátero");
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            System.out.println("Triângulo Isósceles");
        } else {
            System.out.println("Triângulo Escaleno");
        }

        scanner.close();
    }
}
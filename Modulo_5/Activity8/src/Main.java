import Functions.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int opcao;

        do {
            System.out.println("\nEscolha uma opção:");
            System.out.println("1. Calculadora Simples");
            System.out.println("2. Verificador de Palíndromos");
            System.out.println("3. Sequência de Fibonacci");
            System.out.println("4. Inversor de Números");
            System.out.println("5. Verificador de Anagramas");
            System.out.println("6. Jogo de Adivinhação");
            System.out.println("7. Contador de Palavras");
            System.out.println("0. Sair");
            opcao = scanner.nextInt();
            scanner.nextLine(); // Consumir a quebra de linha

            switch (opcao) {
                case 1: Calculadora.executar(scanner); break;
                case 2: VerificarPalindromo.executar(scanner); break;
                case 3: SequenciaFibonacci.executar(scanner); break;
                case 4: InverterNumero.executar(scanner); break;
                case 5: VerificarAnagramas.executar(scanner); break;
                case 6: JogoAdivinhacao.executar(scanner); break;
                case 7: ContadorPalavras.executar(scanner); break;
                case 0: System.out.println("Encerrando o programa..."); break;
                default: System.out.println("Opção inválida. Tente novamente.");
            }
        } while (opcao != 0);
    }
}
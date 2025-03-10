package Functions;
import java.util.*;

public class SequenciaFibonacci {
    public static void executar(Scanner scanner) {
        System.out.print("Quantos números da sequência de Fibonacci deseja exibir? ");
        int n = scanner.nextInt();
        int a = 0, b = 1;

        System.out.print("Sequência de Fibonacci: " + a);
        for (int i = 1; i < n; i++) {
            System.out.print(", " + b);
            int temp = a + b;
            a = b;
            b = temp;
        }
        System.out.println();
    }
}

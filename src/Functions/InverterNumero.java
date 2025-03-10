package Functions;
import java.util.*;

public class InverterNumero {
    public static void executar(Scanner scanner) {
        System.out.print("Digite um número inteiro: ");
        int numero = scanner.nextInt();
        int invertido = 0;

        while (numero != 0) {
            invertido = invertido * 10 + numero % 10;
            numero /= 10;
        }

        System.out.println("Número invertido: " + invertido);
    }
}

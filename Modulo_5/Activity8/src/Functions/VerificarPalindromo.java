package Functions;
import java.util.*;

public class VerificarPalindromo {
    public static void executar(Scanner scanner) {
        System.out.print("Digite uma palavra: ");
        String palavra = scanner.nextLine().toLowerCase().replaceAll("\\s+", "");
        String reverso = new StringBuilder(palavra).reverse().toString();

        if (palavra.equals(reverso)) {
            System.out.println("A palavra é um palíndromo.");
        } else {
            System.out.println("A palavra não é um palíndromo.");
        }
    }
}

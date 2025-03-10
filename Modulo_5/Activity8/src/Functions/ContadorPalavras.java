package Functions;
import java.util.*;

public class ContadorPalavras {
    public static void executar(Scanner scanner) {
        System.out.print("Digite uma frase: ");
        String frase = scanner.nextLine().trim();

        if (frase.isEmpty()) {
            System.out.println("A frase contém 0 palavras.");
        } else {
            String[] palavras = frase.split("\\s+");
            System.out.println("A frase contém " + palavras.length + " palavras.");
        }
    }
}

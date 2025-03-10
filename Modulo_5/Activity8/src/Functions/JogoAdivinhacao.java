package Functions;
import java.util.*;

public class JogoAdivinhacao {
    public static void executar(Scanner scanner) {
        Random random = new Random();
        int numeroEscolhido = random.nextInt(50) + 1;
        int palpite;

        System.out.println("Tente adivinhar o número entre 1 e 50.");

        do {
            System.out.print("Seu palpite: ");
            palpite = scanner.nextInt();

            if (palpite == numeroEscolhido) {
                System.out.println("Parabéns! Você adivinhou o número.");
            } else {
                System.out.println("Palpite errado. Tente novamente.");
            }
        } while (palpite != numeroEscolhido);
    }
}

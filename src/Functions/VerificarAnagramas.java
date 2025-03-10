package Functions;
import java.util.*;

public class VerificarAnagramas {
    public static void executar(Scanner scanner) {
        System.out.print("Digite a primeira palavra: ");
        String palavra1 = scanner.nextLine().toLowerCase().replaceAll("\\s+", "");
        System.out.print("Digite a segunda palavra: ");
        String palavra2 = scanner.nextLine().toLowerCase().replaceAll("\\s+", "");

        if (isAnagrama(palavra1, palavra2)) {
            System.out.println("As palavras são anagramas.");
        } else {
            System.out.println("As palavras não são anagramas.");
        }
    }

    private static boolean isAnagrama(String palavra1, String palavra2) {
        if (palavra1.length() != palavra2.length()) {
            return false;
        }
        char[] array1 = palavra1.toCharArray();
        char[] array2 = palavra2.toCharArray();
        Arrays.sort(array1);
        Arrays.sort(array2);
        return Arrays.equals(array1, array2);
    }
}

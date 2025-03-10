package Functions;
import java.util.*;

public class Calculadora {
    public static void executar(Scanner scanner) {
        System.out.print("Digite o primeiro número: ");
        double num1 = scanner.nextDouble();
        System.out.print("Digite o segundo número: ");
        double num2 = scanner.nextDouble();
        System.out.print("Digite o operador (+, -, *, /): ");
        char operador = scanner.next().charAt(0);

        double resultado;
        switch (operador) {
            case '+': resultado = num1 + num2; break;
            case '-': resultado = num1 - num2; break;
            case '*': resultado = num1 * num2; break;
            case '/':
                if (num2 != 0) resultado = num1 / num2;
                else { System.out.println("Erro: Divisão por zero!"); return; }
                break;
            default: System.out.println("Operador inválido!"); return;
        }
        System.out.println("Resultado: " + resultado);
    }
}
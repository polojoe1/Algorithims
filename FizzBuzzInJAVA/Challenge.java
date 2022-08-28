package FizzBuzzInJAVA;

public class Challenge {
    public static String fizzBuzz(int n) {
        if (n % 15 == 0) {
            return "FizzBuzz";
        } else if (n % 5 == 0) {
            return "Buzz";
        } else if (n % 3 == 0) {
            return "Fizz";
        } else {
            return Integer.toString(n);
        }
    }
}
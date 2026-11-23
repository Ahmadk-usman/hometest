public class FizzBuzz {
    public static void main(String[] args) {
        for (int angka = 1; angka <= 100; angka++) {
            String hasil = "";

            if (angka % 3 == 0) hasil += "Fizz";
            if (angka % 5 == 0) hasil += "Buzz";
            if (hasil.isEmpty()) hasil = String.valueOf(angka);

            System.out.println(hasil);
        }
    }
}
# FADN
Bai Tap Codelearn
package exercise;

import java.util.Scanner;

public class SwapNumbers {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SwapNumbers swapNumbers = new SwapNumbers();
		Scanner sc = new Scanner(System.in);
		System.out.println("Input nummber 1: ");
		int num1 = Integer.parseInt(sc.nextLine());
		System.out.println("Input number 2: ");
		int num2 = Integer.parseInt(sc.nextLine());
		
		System.out.println("Before swap: num1 = " + num1 + ", num2 = " + num2);
		swapNumbers.swap(num1, num2);
		System.out.println("After swap: num1 = " + num1 + ", mum2 = " + num2);
	}
	
	
	public void swap (int num1, int num2) {
		int temp = num1;
		num1= num2;
		num2 = temp;
		System.out.println("In swap : num1 = " + num1 +  "," + "num2 =" + num2);
	}

}

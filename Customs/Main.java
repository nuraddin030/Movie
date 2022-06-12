package Customs;

public class Main {

    public static void main(String[] args) {
        int nums [] = {2,7,11,15};
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] + nums[i+1] == 9) {
                System.out.println(nums[i] + nums[i+1]);
            }
        }
    }
}

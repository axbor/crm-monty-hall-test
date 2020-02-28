package se.comhem.test.montyhall;

public class Game {

    private final int userChoice;
    private final int doorWithCar;
    private final boolean changeDoor;

    public Game(final int userChoice, final int doorWithCar, final boolean changeDoor) {
        this.userChoice = userChoice;
        this.doorWithCar = doorWithCar;
        this.changeDoor = changeDoor;
    }

    public boolean isVictory() {
        if (changeDoor) {
            return userChoice != doorWithCar;
        } else {
            return userChoice == doorWithCar;
        }
    }
}

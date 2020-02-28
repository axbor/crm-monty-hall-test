package se.comhem.test.montyhall;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.IntStream;

public class GamePlay {

    private final int numberOfDoors;
    private final boolean changeDoor;
    private List<Boolean> gameResults;
    private final Random random = new Random();

    public GamePlay(final int numberOfDoors, final boolean changeDoor) {
        this.numberOfDoors = numberOfDoors;
        this.changeDoor = changeDoor;
        gameResults = new ArrayList<>();
    }

    public List<Boolean> playAll() {
        IntStream.range(0, numberOfDoors)
                .forEach(value -> {
                    final int userChoice = random.nextInt(3);
                    final int doorWithCar = random.nextInt(3);
                    final Game game = new Game(userChoice, doorWithCar, changeDoor);
                    gameResults.add(game.isVictory());
                });
        return gameResults;
    }
}

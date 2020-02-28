package se.comhem.test.montyhall;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;


public class GamePlayTest {

    @Test
    public void testGamePlay() {
        final GamePlay gamePlay = new GamePlay(1000, false);

        final List<Boolean> gameResult = gamePlay.playAll();
        assertEquals(1000, gameResult.size());
        assertTrue(gameResult.contains(true));
        assertTrue(gameResult.contains(false));
    }

    @Test
    public void testGamePlayForRoughlyCorrectProbabilityWithoutChange() {
        final GamePlay gamePlay = new GamePlay(1000, false);

        final List<Boolean> gameResult = gamePlay.playAll();
        final long wins = gameResult.stream().filter(result -> result).count();

        System.out.println("wins = " + wins);
        assertTrue(wins > 200);
        assertTrue(wins < 400);
    }

    @Test
    public void testGamePlayForRoughlyCorrectProbabilityWithChange() {
        final GamePlay gamePlay = new GamePlay(1000, true);

        final List<Boolean> gameResult = gamePlay.playAll();
        final long wins = gameResult.stream().filter(result -> result).count();

        assertTrue(wins > 600);
        assertTrue(wins < 800);
    }
}

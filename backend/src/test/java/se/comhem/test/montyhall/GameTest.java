package se.comhem.test.montyhall;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class GameTest {
    @Test
    void wrongDoor0WithoutChange() {
        final Game game = new Game(0, 2, false);
        assertFalse(game.isVictory());
    }

    @Test
    void wrongDoor0WithChange() {
        final Game game = new Game(0, 2, true);
        assertTrue(game.isVictory());
    }

    @Test
    void wrongDoor1WithoutChange() {
        final Game game = new Game(1, 2, false);
        assertFalse(game.isVictory());
    }

    @Test
    void wrongDoor1WithChange() {
        final Game game = new Game(1, 2, true);
        assertTrue(game.isVictory());
    }

    @Test
    void correctDoorWithoutChange() {
        final Game game = new Game(2, 2, false);
        assertTrue(game.isVictory());
    }

    @Test
    void correctDoorWithChange() {
        final Game game = new Game(2, 2, true);
        assertFalse(game.isVictory());
    }
}
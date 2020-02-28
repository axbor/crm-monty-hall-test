package se.comhem.test.montyhall;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller {

    @RequestMapping(method = RequestMethod.GET, path = "/game")
    @ResponseBody
    public List<Boolean> getGamePlay(@RequestParam (value ="numberOfGames")final int numberOfGames,
                                     @RequestParam (value = "changeDoor") final boolean changeDoor) {
        final GamePlay gamePlay = new GamePlay(numberOfGames, changeDoor);
        return gamePlay.playAll();
    }
}

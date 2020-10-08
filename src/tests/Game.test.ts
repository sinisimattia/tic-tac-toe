import { Game } from "@/classes/Game"

test("New game", () => {
    let game = new Game;

    console.info(game.toJson())
})
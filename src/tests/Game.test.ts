import { Game } from "@/classes/Game"

test("New game", () => {
    const game = new Game;

    console.info(game.toJson())
})
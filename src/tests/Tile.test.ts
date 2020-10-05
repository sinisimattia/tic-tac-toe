import { Tile } from "../classes/Tile"

test("Tile construction and getters", () => {
    let tile = new Tile(1, "😉")

    console.log(tile.symbol)

    expect(tile.symbol).toBe("😉")
})
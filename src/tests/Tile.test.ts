import { Tile } from "@/classes/Tile"

test("Tile construction and getters", () => {
    const tile = new Tile(1)

    expect(tile.type).toBe(1)
})
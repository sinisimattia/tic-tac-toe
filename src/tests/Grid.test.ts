import { Grid } from "@/classes/Grid"
import { Tile } from '@/classes/Tile'

test("Grid construction", () => {
    let grid = new Grid(3)

    expect(() => new Grid(0)).toThrowError()

    expect(grid.content[0]).toEqual(grid.toJson().content[0])
})

test("Find & put tile in grid", () => {
    let grid = new Grid(3);
    let tile = new Tile(1);

    expect(() => grid.put(tile, 3, 3)).toThrowError()
    expect(() => grid.put(tile, 2, 3)).toThrowError()
    expect(() => grid.put(tile, 2, 2)).not.toThrowError()

    grid.put(tile, 2, 2);

    expect(() => grid.find(3, 3)).toThrowError()
    expect(() => grid.find(3, 0)).toThrowError()
    expect(grid.find(2, 2)).toEqual(tile)

    console.log(grid.toJson())
})
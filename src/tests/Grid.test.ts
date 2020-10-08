import { Grid } from "@/classes/Grid"
import { Tile } from '@/classes/Tile'

test("Grid construction", () => {
    const grid = new Grid(3)

    expect(() => new Grid(0)).toThrowError()

    expect(grid.content[0]).toEqual(grid.toJson().content[0])
})

test("Find & put tile in grid", () => {
    const grid = new Grid(3);
    const tile = new Tile(1);

    expect(() => grid.put(tile, 3, 3)).toThrowError()
    expect(() => grid.put(tile, 2, 3)).toThrowError()
    expect(() => grid.put(tile, 2, 2)).not.toThrowError()

    grid.put(tile, 2, 2);

    expect(() => grid.find(3, 3)).toThrowError()
    expect(() => grid.find(3, 0)).toThrowError()
    expect(grid.find(2, 2)).toEqual(tile)

    console.log(grid.toJson())
})

test("Get elements in line", () => {
    const grid = new Grid(3);

    const tile1 = new Tile(1);
    const tile2 = new Tile(2);
    const tile3 = new Tile(3);

    grid.put(tile1, 0, 0);
    grid.put(tile2, 1, 1);
    grid.put(tile3, 2, 2);

    expect(() => grid.line([0, 0], [3, 3])).toThrowError()
    expect(() => grid.line([-1, 0], [2, 2])).toThrowError()
    expect(() => grid.line([0, 0], [2, 2])).not.toThrowError()
    expect(() => grid.line([0, 0], [0, 2])).not.toThrowError()
    expect(() => grid.line([0, 0], [2, 0])).not.toThrowError()
})
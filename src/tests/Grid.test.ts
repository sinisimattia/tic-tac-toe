import { Grid } from "@/classes/Grid"

test("Grid construction", () => {
    let grid = new Grid(3);

    expect(() => new Grid(0)).toThrowError()
})
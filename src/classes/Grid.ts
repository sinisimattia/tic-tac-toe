import { Tile } from '@/classes/Tile';
import { Representable } from '@/interfaces/Representable';

export class Grid implements Representable {
    private _side: number;
    private _content: Tile[][];

    constructor(side: number) {
        if (side <= 0) {
            throw new Error("The side length cannot be less than or equal to 0");
        }

        this._side = side;

        this._content = new Array<Tile>(side).fill(new Tile(Tile.EMPTY)).map(() => new Array(side));
    }

    get content() {
        let result = new Array;

        this._content.forEach((row, rowIndex) => {
            result.push([]);

            row.forEach((cell, colIndex) => {
                result[rowIndex][colIndex] = cell.type
            });
        })

        return result;
    }

    public put(tile: Tile, x: number, y: number, force: boolean = false) {
        if (!this.isPositionValid(x, y))
            throw new Error(`Invalid position: ${x}:${y}`);

        let cell = this._content[x][y];

        if (!force && (cell === undefined || cell === null || cell.type === Tile.EMPTY))
            this._content[x][y] = tile;
    }

    public find(x: number, y: number): Tile {
        if (!this.isPositionValid(x, y))
            throw new Error(`Invalid position: ${x}:${y}`);

        return this._content[x][y];
    }

    public line(start: [x: number, y: number], end: [x: number, y: number]): Array<Tile> {
        let from = {
            x: start[0],
            y: start[1]
        };

        let to = {
            x: end[0],
            y: end[1]
        };

        let results = new Array<Tile>();

        if (!this.isPositionValid(from.x, from.y) || !this.isPositionValid(to.x, to.y))
            throw new Error(`Invalid position in either start or end`);

        for (let x = from.x; x <= (to.x); x++) {
            let y = ((x - from.x) / (to.x - from.x) * (to.y - from.y)) + from.y;

            results.push(this.find(x, y));
        }

        return results;
    }

    private isPositionValid(x: number, y: number): boolean {
        return (x >= 0 && x <= this._side - 1) && (y >= 0 && y <= this._side - 1);
    }

    public toString(): String {
        let S = new String("Grid\n");

        this._content.forEach(row => {
            row.forEach(cell => {
                S += `[${cell ? cell.toString() : ''}]`;
            });

            S += "\n";
        })

        return S;
    }

    public toJson(): any {
        return {
            side: this._side,
            content: this.content
        }
    }

}
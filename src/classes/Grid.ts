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

        this._content = new Array<Tile>(side).fill(new Tile(Tile.EMPTY)).map(() => new Array(side).fill(new Tile(Tile.EMPTY)));
    }

    get content() {
        const result = new Array;

        this._content.forEach((row, rowIndex) => {
            result.push([]);

            row.forEach((cell, colIndex) => {
                result[rowIndex][colIndex] = cell.type
            });
        })

        return result;
    }

    get side(){
        return this._side;
    }

    public put(tile: Tile, x: number, y: number, force: boolean = false): boolean {
        if (!this.isPositionValid(x, y))
            throw new Error(`Invalid position: ${x}:${y}`);

        const cell = this._content[x][y];

        if (!force && (cell === undefined || cell === null || cell.type === Tile.EMPTY)){
            this._content[x][y] = tile;
            return true;
        }
        else
            return false;
    }

    public find(x: number, y: number): Tile {
        if (!this.isPositionValid(x, y))
            throw new Error(`Invalid position: ${x}:${y}`);

        return this._content[x][y];
    }

    public findByIndex(i: number) {
        const x = i % this._side;
        const y = i / this._side;

        return this.find(x, y);
    }

    public line(start: [x: number, y: number], end: [x: number, y: number]): Array<Tile> {
        const from = {
            x: start[0],
            y: start[1]
        };

        const to = {
            x: end[0],
            y: end[1]
        };

        const results = new Array<Tile>();

        if (!this.isPositionValid(from.x, from.y) || !this.isPositionValid(to.x, to.y))
            throw new Error(`Invalid position in either start or end`);

        if (from.x != to.x)
            for (let x = from.x; x <= (to.x); x++) {
                const y = ((x - from.x) / (to.x - from.x) * (to.y - from.y)) + from.y;

                results.push(this.find(x, y));
            }
        else
            for (let y = from.y; y < to.y; y++)
                results.push(this.find(from.x, y))

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
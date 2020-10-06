import { Tile } from '@/classes/Tile';
import { Representable } from '@/interfaces/Representable';

export class Grid implements Representable {
    private _side: Number;
    private _content: Tile[][];

    constructor(side: Number){
        this._side = side;
    
        this._content = new Array(side).fill(new Tile(0)).map(() => new Array(side));
    }

    toString(): String {
        let S = new String("Grid\n");

        this._content.forEach(row => {
            row.forEach(cell => {
                S += `[${cell ? cell.toString(): ''}]`;
            });
        })

        return S;
    }
    toJson(): Object {
        throw new Error('Method not implemented.');
    }

}
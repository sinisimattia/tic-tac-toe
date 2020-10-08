import { Tile } from '@/classes/Tile';
import { Representable } from '@/interfaces/Representable';

export class Grid implements Representable {
    private _side: number;
    private _content: Tile[][];

    constructor(side: number){
        if(side <= 0){
            throw new Error("The side length cannot be less than or equal to 0");
        }

        this._side = side;
    
        this._content = new Array<Tile>(side).fill(new Tile(0)).map(() => new Array(side));
    }

    toString(): String {
        let S = new String("Grid\n");

        this._content.forEach(row => {
            row.forEach(cell => {
                S += `[${cell ? cell.toString(): ''}]`;
            });

            S += "\n";
        })

        return S;
    }
    toJson(): Object {
        console.log(this._content)
        throw new Error('Method not implemented.');
    }

}
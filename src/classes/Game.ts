import { Dictionary } from '@/classes/Dictionary';
import { Grid } from '@/classes/Grid';
import { Representable } from '@/interfaces/Representable';

export class Game implements Representable {
    private _grid: Grid;
    private _winner: string|undefined = undefined;
    private _turnIndex: number = 0;
    private _playersDictionary: Dictionary<string, number>;

    constructor(gridSize: number = 3, symbols: string[] = ["X", "O"]){
        this._grid = new Grid(gridSize);

        this._playersDictionary = new Dictionary<string, number>();

        symbols.forEach((value, index) => {
            this._playersDictionary.add(index, value)
        })
    }

    public put(){}
    private completeTurn(){}
    private checkStatus(){}

    get grid(){
        return this._grid
    }

    get dictionary(){
        return this._playersDictionary;
    }

    toString(): String {
        throw new Error('Method not implemented.');
    }

    toJson() {
        return {
            grid: this._grid.toJson(),
            players: this._playersDictionary.toJson(),
            turnOf: this._turnIndex,
            winner: this._winner,
        }
    }
}
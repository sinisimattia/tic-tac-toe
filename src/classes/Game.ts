import { Dictionary } from '@/classes/Dictionary';
import { Grid } from '@/classes/Grid';

export class Game {
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
}
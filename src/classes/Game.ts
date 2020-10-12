import { Dictionary } from '@/classes/Dictionary';
import { Grid } from '@/classes/Grid';
import { Representable } from '@/interfaces/Representable';
import { Tile } from './Tile';

export class Game implements Representable {
    private _grid: Grid;
    private _winner: string|undefined = undefined;
    private _turnIndex: number = 1;
    private _playersDictionary: Dictionary<string, number>;

    constructor(gridSize: number = 3, symbols: string[] = []){
        if(!symbols || symbols.length === 0){
            symbols = ["✕", "◯"];
        }

        this._grid = new Grid(gridSize);

        this._playersDictionary = new Dictionary<string, number>();

        this._playersDictionary.add(Tile.EMPTY, "")

        symbols.forEach((value, index) => {
            this._playersDictionary.add(index + 1, value)
        })
    }

    public move(x: number, y: number){
        const turnInfo = this.turn;
        const tile = new Tile(turnInfo.index)

        if(this._grid.put(tile, x, y)){
            this.completeTurn()
            this.checkStatus()
        }
            
    }

    private completeTurn(){
        if(this._turnIndex < this._playersDictionary.length - 1)
            this._turnIndex++;
        else
            this._turnIndex = 1;
    }

    protected checkStatus(){
        const diagonals = new Array<Tile[]>();
        const length = this._grid.side - 1;

        diagonals.push(this._grid.line([0, 0], [length, length]));
        diagonals.push(this._grid.line([0, length], [length, 0]));

        diagonals.forEach(line => {
            const lineDominator = this.getLineDominator(line);
            if(lineDominator){
                this._winner = this._playersDictionary.find(lineDominator.type);
                return;
            }
        })

        for(let y = 0; y <= length; y++){
            const lineDominator = this.getLineDominator(this._grid.line([0, y], [length, y]));
            if(lineDominator){
                this._winner = this._playersDictionary.find(lineDominator.type);
                break;
            }
        }

        for(let x = 0; x <= length; x++){
            const lineDominator = this.getLineDominator(this._grid.line([x, 0], [x, length]));
            if(lineDominator){
                this._winner = this._playersDictionary.find(lineDominator.type);
                break;
            }
        }
    }

    private getLineDominator(line: Array<Tile>): Tile | undefined{
        return line.every(tile => tile.type !== Tile.EMPTY && (tile.type === line[0].type)) ? line[0] : undefined;
    }

    get grid(){
        return this._grid
    }

    get dictionary(){
        return this._playersDictionary;
    }

    get turn(){
        return {
            index: this._turnIndex,
            symbol: this._playersDictionary.find(this._turnIndex)
        }
    }

    get winner() {
        return this._winner;
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
import { Representable } from '@/interfaces/Representable';

export class Tile implements Representable{
    private _id: Number;
    private _symbol: String;

    constructor(id: Number, symbol: String){
        this._id = id;
        this._symbol = symbol;
    }

    get id(){
        return this._id;
    }

    get symbol(){
        return this._symbol;
    }

    public toString() {
        return this._symbol;
    }

    public toJson() {
        return {
            id: this._id,
            symbol: this._symbol,
        }
    }

}
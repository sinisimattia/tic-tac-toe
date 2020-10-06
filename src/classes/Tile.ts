import { Representable } from '@/interfaces/Representable';

export class Tile implements Representable{
    private _type: Number;

    constructor(type: Number){
        this._type = type;
    }

    get type(){
        return this._type;
    }

    public toString() {
        return "" + this.type;
    }

    public toJson() {
        return {
            type: this._type
        }
    }

}
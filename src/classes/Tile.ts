import { Representable } from '@/interfaces/Representable';

export class Tile implements Representable{
    private _type: number;

    constructor(type: number){
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
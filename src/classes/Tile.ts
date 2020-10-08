import { Representable } from '@/interfaces/Representable';

export class Tile implements Representable{
    private _type: number;
    public static get EMPTY(): number { return 0 };

    constructor(type: number){
        this._type = type;
    }

    get type(){
        return this._type;
    }

    public toString(): String {
        return "" + this.type;
    }

    public toJson(): any {
        return {
            type: this._type
        }
    }

}
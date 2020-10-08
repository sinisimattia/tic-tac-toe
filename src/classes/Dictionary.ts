import { Representable } from '@/interfaces/Representable';

export class Dictionary<Type, Index = String> implements Representable {
    private _content: [Index, Type][];

    constructor(content: [Index, Type][]) {
        this._content = content;
    }

    toString(): String {
        return '' + this.toJson();
    }

    toJson(): any {
        return this.content;
    }

    get content(): Array<any> {
        var arr = new Array;

        this._content.forEach(element => {
            arr.push({
                name: element[0],
                value: element[1]
            });
        });

        return arr;
    }

    public find(name: Index): Type | undefined {
        let el = this._content.find((value) => value[0] === name);

        return el ? el[1] : undefined;
    }
}
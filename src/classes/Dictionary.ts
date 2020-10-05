import { Representable } from '@/interfaces/Representable';

export class Dictionary<Type, Index = String> implements Representable {
    private content: [Index, Type][];

    constructor(content: [Index, Type][]) {
        this.content = content;
    }

    public toJson(): Array<any> {
        var arr = new Array;

        this.content.forEach(element => {
            arr.push({
                name: element[0],
                value: element[1]
            });
        });

        return arr;
    }

    public find(name: Index): Type | undefined {
        let el = this.content.find((value) => value[0] === name);

        return el ? el[1] : undefined;
    }
}
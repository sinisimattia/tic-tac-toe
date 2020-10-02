export class Dictionary<Type> {
    private content: [String, Type][];

    constructor(content: [String, Type][]){
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

    public find(name: String){
        //
    }
}
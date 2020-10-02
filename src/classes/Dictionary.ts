export class Dictionary<Type> {
    private content: [String, Type][];

    constructor(content: [String, Type][]){
        this.content = content;
    }

    /**
     * toString
     */
    public toString() {
        return this.content.toString();
    }
}
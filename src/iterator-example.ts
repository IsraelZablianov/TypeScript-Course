class IterableExample implements Iterable<string> {

    constructor(private values: string[]) { }

    [Symbol.iterator](): Iterator<string> {
        let index = 0;
        let values = this.values;

        return {
            next(): IteratorResult<string> {
                if (index < values.length) { 
                    return {
                        done: false,
                        value: values[index++]
                    }
                } else {
                    return {
                        done: true,
                        value: null as any
                    }
                }
            }
        }
    }
}

let iterableExample = new IterableExample(["one", "two", "three", "four"]);
for (let someString of iterableExample) {
    console.log(someString);
}

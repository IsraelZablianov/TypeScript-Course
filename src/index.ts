function* awesomeGeneratorFunc(): IterableIterator<number> {
    yield 123;
    yield 124;
    yield 125;
    return 20;
}

function* range(start: number, count: number) {
    for (let delta = 0; delta < count; delta++) {
        yield start + delta;
    }
}
 
function* delegatedGeneratorFunc(start: number) {
    yield 'before';
    yield* awesomeGeneratorFunc();
    yield 'between';
    yield* range(start, 5);
    yield 'after';
}

function* delegatedGeneratorFuncV2() {
    // we're still including the 3 items yielded by awesomeGeneratorFunc(),
    // but we're also saving the return value in a variable
    let start = yield* awesomeGeneratorFunc();
    console.log("start :" + start);
    console.log(start);
    // we can now use that variable to initialize range()
    yield* range(start, 3);
}

// output: ['Generators', 'are', 'awesome', 1000, 1001, 1002]
console.log([...delegatedGeneratorFuncV2()]);

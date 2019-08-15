const pr = new Promise((resolver) => {
    setTimeout(() => {
        resolver("done my friend");
    }, 2000);
})

function* foo(): IterableIterator<number> {
    var i = 0;
    while(i < 100) {
        yield i++;
    }
}

for(let item of foo()) {
    console.log(item);
}

// output
// 0
// ..
// ..
// 99






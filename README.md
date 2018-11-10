<p align="center">
    <a href="http://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
        <img width="100" src="https://res.cloudinary.com/israelz/image/upload/v1541880271/ts.png" alt="TypeScript logo">
    </a>
</p>

<h1 align="center">Introduction To TypeScript</h1>

## Presentation
Attached `.pptx` file is the presentation file for this course. <br />

## About the course
There are going to be two parts for the course. <br />

### Part 1 - Introduction To `TypeScript`
We are going to create a new `TypeScript` app from scratch. <br />
Our goal is to make this piece of code to work: 

```js
const listOfAnimals = new List<Animal>(); 

listOfAnimals.add(new Dog("Joy")); 
listOfAnimals.add(new Dog("Moni")); 
listOfAnimals.add(new Cat("Marshel")); 
listOfAnimals.add(new Horse("Din")); 

list.print();
/*
    Expected output:
    Hello I am Joy!
    Hello I am Moni!
    Hello I am Marshel!
    Hello I am Din!
 */
```
<h4>Let's start</h4>
Verify that you have `Npm`, `Node` and `TypeScript` installed globally on your computer. <br />

* Create a new empty folder. <br />

* In the root folder add a folder called src.
Inside of it we will have most of our code, organized in sub folders and `.ts` files.

* In the root folder run `tsc --init` command (tsconfig.json file should be created).
Edit your tsconfig.json if needed (change configuration etc.)

* In the root folder file run `npm init` command (package.json file should be created)
Edit your package.json if needed (change configuration etc.)

* At this point your folder should look like:

```txt
src/
├─ some-file.ts
├─ some-inner-folder/
|  └─ some-file.ts
└─ package.json
└─ tsconfig.json
```

* Add some files to src folder compile and run.

## References
* [`Official Docs`](https://www.typescriptlang.org/docs/home.html)
* [`Compiler Options`](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
* [`TypeScript Github`](https://github.com/Microsoft/TypeScript)
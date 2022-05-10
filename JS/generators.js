// function *generator(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const gen = generator()
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

function* infinite(){
    let index = 0

    while(true){
        yield index++
    }
} 

let gen = infinite()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

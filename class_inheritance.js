// class A{
//     constructor(x){
//         this.a = x
//     }
// }

// class B extends A{
//     constructor(x,y){
//         super(x)
//         this.b = y
//     }
// }

// class C extends B{
//     constructor(x,y,z){
//         super(x,y)
//         this.c = z
//     }
//     dis(){
//         console.log(`A:${this.a} B:${this.b} C:${this.c}`)
//     }
// }
// // a variable can be initialized by its own ctr
// let objC = new C(11, 22,33)
// objC.dis()

class God{
    hi(){
        console.log("Hii From GOD")
    }
}

class Human extends God{
    constructor(name, height){
        super()
        this.name = name
        this.height = height
    }
    hello(){
        console.log(`Hello I am ${this.name} from the Human Class`)
    }
}
// console.log(Human)
// let human = new Human("John", 5.5)
// console.log(human)
// human.hello()
// human.hi()
class John extends Human{
    constructor(name, height, weight){
        super(name, height)
        this.weight = weight
    }
    hello(){
        // console.log("Hello from John class")
        super.hello()
    }
}

let jhn = new John("John Smith", 5,5, 60)
jhn.hello()
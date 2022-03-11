// function Student(){
//     this.name = "John"
//     this.gender = "Male"
// }
// Student.prototype.age = 15;
// // Student.prototype.dis = function(){
// //     console.log(name+" "+gender)
// // }

// //1. allocate memory
// //2. return the add of that memory
// var stdObj1 = new Student();
// // stdObj1.age = 15;
// console.log(stdObj1.age)

// var stdObj2 = new Student();
// console.log(stdObj2.age)



let dragon = {
    name : "Tanya",
    fire : true,
    fight(){
        return 10
    },
    sing(){
        if(this.fire){
            return `I  am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name : "Kiki",
    fire : true,
    fight(){
        return  1
    }
}

//we come borrow the sing fn for lizard using bind
const singLizard = dragon.sing.bind(lizard)
console.log(singLizard())
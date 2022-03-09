//everything is an object

//functions are objects
//functions(objects) can be returned from other funs
//functions(objects) can be passed as arguments

//transpilers babel
//babeljs + canIuse


let add = (x,y) => x+y
console.log(add(3,4))

//1.Arrow fns doesnt have the this keyword

let group = {
    title:"Our Group",
    students:["John", "Jill", "Jimmy"],

    showList(){
        this.students.forEach(
            (student)=>{
                console.log(this.title+':'+student)
            }
        )
    }
}

group.showList()


class A{
    constructor(x){
        this.a = x
    }
}

class B extends A{
    constructor(y){
        this.b = y
    }
}

class C extends B{
    constructor(z){
        this.c = z
    }
}

let objC = new C(11)
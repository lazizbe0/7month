// function areaPeremiter(h, w) {
//     if(h == w) {
//         return h * w
//     }else {
//         return (h + w) * 2
//     }
// }

// areaPeremiter(200,500)

class Human {
    constructor(obj){
        this.name = obj.name;
        this.gendor = obj.gendor;
    }
}

class Woman extends Human {
    constructor(obj) {
        super(obj)   
        this.gendor = 'M'
    }
}

const human = new Human({
    name: 'Nikita',
    gendor: 'Man'
})

const woman = new Woman({
    name: 'Alisa'
})

const man = new Man({
    name: 'Firik'
})

console.log(woman)

// const human = new Human({
//     name: 'Nikita',
//     gendor: 'Man'
// })

// console.log()

// const obj = new Object({
//     name: 'Nikita'
// })

// const 
const dataProperty = {
    x: 69
}

const accessProperty = {
    get x(){
        return 70;
    }
}

console.log(Object.getOwnPropertyDescriptor(dataProperty, 'x'))

console.log(Object.getOwnPropertyDescriptor(accessProperty, 'x'))

console.log(dataProperty.x) // 69

dataProperty.x++ // 69+1

console.log(dataProperty.x) // 70

Object.freeze(dataProperty) // strongest prevention that calls seal in implicit manner.

dataProperty.x++ // 70+1?

console.log(dataProperty.x) // it will be 71, isn't it?
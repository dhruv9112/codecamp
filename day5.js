
// js is used to provide logic to our website

// data types in js
// there are different data types available in js like 
// string(both single and double quotes can be used),
// number(1,2,3...),
// array(collection of different data types in square parenthesis),
// objects(collection of key,value pair in curly braces)
// etc...





// to print something we use console.log
// console.log('connected')
// console.log('1'+'1')
// console.log(1+1)


// in js variables are of 3 types -> const,let,var

// in const we cannot assign new value to same variable otherwise it will throw an error

// const user = "dhruv"
// console.log(user)   


// by using let, we can change the value of user, but let keyword is used only first time after that direct initialization of same variable cannot be done by let.
// let user = 'dhruv'
// console.log(user)
// user = 'paras'
// console.log(user)

// let and var are same but only difference is the scope 
// also u can declare var multiple time for same variable which is not in case of let


// built in functions in js

let user = 'dhruv sharma'
console.log(user.length)
console.log(user.split(''))
console.log(user.split('h'))


// in js we use camelcase(not necesssary but conventionally) means when we r using bigger names of functions or variables containing 3-4 names or more,starting letter of that would be small followed by upper case
// for eg in toUpperCase(), here t is small then U is capital and C is captial
// eg -> toTheUpperClassSomething

console.log(user.toUpperCase())


// reverse
// let number = [1,2,3,4,5]

// console.log(number)

// number.reverse()
// console.log(number)



// indexing in js-> starts from 0
// let number = [1,2,3,4,5]
//here 4 is at index 3
// console.log(number[3])

// accesing every element
// let number =[1,2,3,4,5]
// number.forEach(i => {
//     console.log(i)
// })


// let myObject = {
//     name :'john', age : 20, isMarried : false
// }

// console.log(myObject['isMarried'])



//JSON  ( Javascript object notation)





//if-else conditon

// let number = 6
// if(number==6){
//     console.log('number is 6')
// }
// else{
//     console.log('number is not 6')
// }
// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

//const { describe, it } = require("node:test")

// const { describe, it } = require("node:test")

// const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// b) Create the function that makes the test pass.

// I will create a test for a function called describeObject, the function will return a sentence with a person's name capitalized and their description. 
describe ("describeObject", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(describeObject(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// test failed with function not defined;
// I will create a function called describeObject, it will take in a array of objects and return one string for each object. the string will consist of the two strings inside each object joined into one, the first string will have each word capitalized before it is joined into the new string.

// const describeObject1 = (inputArray) => {



//   let destructObj = inputArray[0]
//   let name = destructObj.name.split(" ")
//   for (let i = 0; i < name.length; i++) {
//     name[i] = name[i][0].toUpperCase() + name[i].substr(1)
//   }
//   fullName = name.join(" ")
//   console.log(fullName + " " + destructObj.occupation)

// }

// describeObject1(people)

const describeObject = (inputArray) => {

  let result = []

  for (let i = 0; i < inputArray.length; i++) {
    //console.log(i)
    let destructObj = inputArray[i]
    let name = destructObj.name.split(" ")
    for (let i = 0; i < name.length; i++) {
    name[i] = name[i][0].toUpperCase() + name[i].substr(1)
    }
    fullName = name.join(" ")
    //console.log(fullName + " " + destructObj.occupation)
    result[i] = (fullName + " is " + destructObj.occupation + ".")
    

  }
  // console.log(result)
  // console.log(result[0])
  return [result[0], result[1], result[2]]
}

describeObject(people)

// There was alot of trial and error for this one; initially i made the jest test to test for three seperate strings but i had to redo that and make it test for the one array output; also it took a while to remember to use dot notation on the objects to retreive their values. finally i had to edit the string interpolation the function returned to keep adding string pieces i had forgotten to make the test passed


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// b) Create the function that makes the test pass.


// Im going to create a test for a function called arrayOfRemainders; the test will check the functions output with two tests - it will only return the remainder of the numbers devided by 3.

describe("arrayOfRemainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(arrayOfRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]),
    expect(arrayOfRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// got function not defined now I'll write the function; I will take in a array; filter out the numbers into a new array, then use map get the remainder of each number multiplied by three and put it in a new array; then return that array

// try 1

// const arrayOfRemainders = (inputArray) => {
//   let returnNumbers = inputArray.filter(Number)
//   let finalArray = returnNumbers.map(value => value % 3)
//   return finalArray
  
// }

// arrayOfRemainders(hodgepodge1)

// try 2 - got first test but not second

// const arrayOfRemainders = (inputArray) => {
//   let returnNumbers = inputArray.filter(value => value === 0 || value >= 1 || value < 0)
//   console.log(returnNumbers)
//   let finalArray = returnNumbers.map(value => value % 3)
//   console.log(finalArray)
//   return finalArray
  
// }

// arrayOfRemainders(hodgepodge1)


const arrayOfRemainders = (inputArray) => {
  let returnNumbers = inputArray.filter(value => value === 0 || value >= 1  || value < 0)
  returnNumbers2 = returnNumbers.filter(Number.isFinite)
  console.log(returnNumbers2)
  let finalArray = returnNumbers2.map(value => value % 3)
  console.log(finalArray)
  return finalArray
  
}

arrayOfRemainders(hodgepodge2)

// both tests are now passing, I had to change how the numbers were filtered a few times to make the first test pass; then check to see if the number was a real number with the .isFinite method to make the second pass


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// b) Create the function that makes the test pass.


// I need to create a test for a funtion called returnCubedArray; the test will make sure the function returns an array that is passed to it with all the numbers cubed then added together

describe("returnCubedArray", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(returnCubedArray(cubeAndSum1)).toEqual(99),
    expect(returnCubedArray(cubeAndSum2)).toEqual(1125)
  })
})

// test failed with function not defined
// I need to make a function called returnCubedArray that takes in one array; cubes all items in the array then adds them together and returns that number

const returnCubedArray = (inputArray) => {
  let cubedArray = inputArray.map(value => value * value * value)
  let returnSum = 0

  for(let i = 0; i < cubedArray.length; i++){
    returnSum = returnSum + cubedArray[i]
  }
  return returnSum

}

returnCubedArray(cubeAndSum1)

// this one was relatively easy compared to the others I thought, but it made me feel good to solve it in one go
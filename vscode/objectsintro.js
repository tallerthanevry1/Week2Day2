//----------------------------
// Objects
//----------------------------


const arr = [1,2,3,4]

const Alex = {
    name: "Alex Merced",
    age: 37,
    isTall: false
}

const Becky = {
    name: "Becky",
    age: 35,
    isTall: false
}

const people = [Alex, Becky]

console.log(Alex.name)
console.log(people)

// Robot

const key = "weapon"

const robot = {
    name: "BleepBlop",
    serial: 1,
    isEvil: false,
    ["gas tank"]: "full",
    [key]: "Lazers"
}

console.log(robot)
console.log(robot.name) // access pro via dot
console.log(robot.name) // access prop via dot
console.log(robot["gas tank"]) // access prop via []
console.log(robot.weapon)

// using objects to count strings

function countStrings(arr){

  const obj = {}

  for (let word of arr){
      if(obj[word]){
          obj[word] += 1
      } else {
          obj[word] = 1
      }
  }

  return obj

}

console.log(countStrings(["dog", "dog", "cat"]))

// adding keys

const you = {}

you.name = "Alex Merced"
you.age = 37

console.log(you)

const brendan = {
    name: "brendan doherty",
    age: 32,
    isTall: true,

    myGreeting(){
        console.log(`${this.name} say hello`);
    }
}
brendan.myGreeting();
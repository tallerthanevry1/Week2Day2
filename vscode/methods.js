//===============================
// METHOD (functions inside of objects)
//================================

const obj = {
    prop: "Hello WOrld",
    // method #1
    myFunc: () => {
        console.log(this)
        console.log("can I use this: " + this.prop )
    },
    // method #2
    myFunc2: function(){
        console.log(this)
        console.log("can I use this: " + this.prop )
    },
    // method #3
    myFunc3(){
        console.log(this)
        console.log("can I use this: " + this.prop )
    }
}

obj.myFunc()
obj.myFunc2()
obj.myFunc3()

// array to hold are robot objects
const robots = []

// create 100 robots
for(let count = 0; count < 100; count += 1){
    robots.push({
        name: `Evil Robot ${count}`,
        attack: function(){
            console.log("attack")
        }
    })
}

console.log(robots)

for (let robot of robots){
    if(robot.serial % 2 === 0){
        console.log(robot.name)
        robot.attack()
    }
}

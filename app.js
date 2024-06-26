// console.log("Hello");

//Before method
// Customer() {

// }

// class Customer {
//     name;
//     age;
//     address;

//     //Above method using CONSTRUCTORS
//     constructor(name, age, address) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

//     setName(name) {
//         this.name = name;
//     }
//     getName() {
//         return this.name;
//     }

//     setAge(age) {
//         this.age = age;
//     }
//     getAge() {
//         return this.age;
//     }
// }

// let customer01 = new Customer("Saad", 18, "Colombo");

// console.log(customer01.getName());
// console.log(customer01.getAge());


//ARRAYS IN JAVASCRIPT

// let customers = [
//     {
//         name:"saman",
//         age:12,
//         address:"gamapaha"
//     },
//     12,
//     [
//         {
//             name:"wimal"
//         },
//         {
//             name:"kamal"
//         },
//         {
//             name:"sunil"
//         },
//         12
//     ],
//     "vimal",
//     {},
//     {},
//     {}
// ]



// console.log(customers[2]);

// customers[2].forEach(nameObj => {
//     console.log(nameObj.name);
// })


let randomNumber = Math.floor((Math.random()*10)+1);
console.log(randomNumber);

let guess = 1;

document.getElementById("submitguess").onclick = function() {
    let numberEnteredByUser = document.getElementById("guessField").value;

    if (numberEnteredByUser==randomNumber) {
        alert("🏆CONGRATULATIONS🏆 you guessed it right in " +guess + " GUESS")
    }else if (numberEnteredByUser>randomNumber) {
        guess++;
        alert("😢 Try a Smaller Number 😢")
    }else {
        guess++;
        alert("🤭 Try a Larger Number 🤭")
    }
}

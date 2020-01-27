// STEP 3 | .length()
console.log("")
console.log("")
console.log("========== STEP 3 ==========");
console.log("")
let cars = ["Ford", "Honda", "Tesla", "Jeep"];
console.log(`# of cars in array = ${cars.length}`);
console.log("")



// STEP 4 | .concat()
console.log("")
console.log("")
console.log("========== STEP 4 ==========");
console.log("")
let moreCars = ["Kia", "Fiat", "Volvo", "Honda"];
let totalCars = cars.concat(moreCars);
console.log(`totalCars = ${totalCars}`);
console.log("")



// STEP 5 | .indexOf() & .lastIndexOf
console.log("")
console.log("")
console.log("========== STEP 5 ==========");
console.log("")
console.log(`Index of "Honda" = ${totalCars.indexOf("Honda")}`);
console.log(`Last index of "Ford" = ${cars.lastIndexOf("Ford")}`);
console.log("")



// STEP 6 | .join()
console.log("")
console.log("")
console.log("========== STEP 6 ==========");
console.log("")
let stringOfCars = totalCars.join();
console.log(`stringOfCars = ${stringOfCars}`);
console.log("")



// STEP 8 | .reverse()
console.log("")
console.log("")
console.log("========== STEP 8 ==========");
console.log("")
let carsInReverse = totalCars.reverse();
console.log(`carsInReverse = ${carsInReverse}`);
console.log("")



// STEP 9 | .sort()
console.log("")
console.log("")
console.log("========== STEP 9 ==========");
console.log("")
let sortedCars = carsInReverse.sort();
console.log(`sortedCars = ${sortedCars}`);
console.log("")



// STEP 10 | .slice()
console.log("")
console.log("")
console.log("========== STEP 10 ==========");
console.log("")
let removedCars = carsInReverse.slice(1,4);
console.log(`sliced carsInReverse = ${removedCars}`);


// STEP 11 | .splice()
console.log("")
console.log("")
console.log("========== STEP 11 ==========");
console.log("")
carsInReverse = totalCars.reverse();
console.log(`carsInReverse = ${carsInReverse}`);
splicedCarsInReverse = carsInReverse.splice(1, 2, "Ford", "Honda");
console.log(`spliced carsInReverse = ${carsInReverse}`);



// STEP 12 | .push()
console.log("")
console.log("")
console.log("========== STEP 12 ==========");
console.log("")
console.log(`carsInReverse = ${carsInReverse}`);
carsInReverse.push(splicedCarsInReverse);
console.log(`Pushed carsInReverse = ${carsInReverse}`);



// STEP 13 | .pop()
console.log("")
console.log("")
console.log("========== STEP 13 ==========");
console.log("")
console.log(`carsInReverse = ${carsInReverse}`);
let popped = carsInReverse.pop();
console.log(`Popped segment = ${popped}`);
console.log(`Popped carsInReverse = ${carsInReverse}`);



// STEP 14 | .shift()
console.log("")
console.log("")
console.log("========== STEP 14 ==========");
console.log("")
console.log(`carsInReverse = ${carsInReverse}`);
carsInReverse.shift();
console.log(`Shifted carsInReverse = ${carsInReverse}`);



// STEP 15 | .unshift()
console.log("")
console.log("")
console.log("========== STEP 15 ==========");
console.log("")
console.log(`carsInReverse = ${carsInReverse}`);
carsInReverse.unshift("VW");
console.log(`Unshifted carsInReverse = ${carsInReverse}`);



// STEP 16 | .forEach()
console.log("")
console.log("")
console.log("========== STEP 16 ==========");
console.log("")

let numbers = [23, 45, 0, 2];

const addTwo = (numbers) =>

{
    for (let i=0; i < numbers.length; i++)
    {
        numbers[i] = numbers[i] +2;
    }
    console.log(`Array after addTwo function = [${numbers}]`);

}
addTwo (numbers);

console.log("")
console.log("")

const numbers2 = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]


numbers2.forEach(function(number, index) { 
    numbers2[index] = number + 2;
});

console.log(`Array after .forEach loop function = [${numbers2}]`);


























console.log("")
console.log("")
console.log("")
console.log("")




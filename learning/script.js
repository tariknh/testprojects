let user = {};
user.name = "John";
user.surName = "Smith";
console.log(user);


let schedule = {};
key = "";
function isEmpty(obj){
    for (let key in obj){
        return false;
    }return true;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

for (let key in salaries){
    console.log();
}
let sum = 0;
function addSalaries(){
    sum = salaries.John +
    salaries.Ann +
    salaries.Pete

    if (sum === 0) return false;
    else return sum;
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  
function multiplyNumeric(obj){
    for (key in obj){
        if (typeof obj[key] === "number"){
            obj[key] *= 2;
        }
    }
}
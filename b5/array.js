let menu = ['cơm', 'mì','phở','cháo']

let a = prompt('Điền vào đây 1 món ăn')
let b = prompt('Điền vào đây 1 món ăn nữa')
let add = menu.push(a,b)

console.log("Add:",a,b)
console.log(menu)

let body = document.getElementById("dishes")
let first_dish = document.createElement("div")
first_dish.innerHTML = menu[0]
body.appendChild(first_dish)

let last_dish = document.createElement("div")
last_dish.innerHTML = menu[menu.length -1]
body.appendChild(last_dish)


console.log( "Số món ăn:" + menu.length)

let slice = menu.splice(1,1)
console.log(slice)

let all_dish = document.createElement("div")
all_dish.innerHTML = menu.join(" ")
body.appendChild(all_dish)
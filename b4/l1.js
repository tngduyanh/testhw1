// console.log("helo")

// var a = prompt("enter sth")
// var b = prompt("enter anoth")

// if(isNaN(a)){
//     console.log("no")
// }
// else{
//     console.log("yuh","number is",a)
// }

// if(isNaN(b)){
//     console.log("no")
// }
// else{
//     console.log("yuh","number is",b)
// }

// a = parseInt(a)
// b = parseInt(b)

// let c = (a + b)
// let d = a - b
// let e = a * b
// let f = a / b

// console.log(c,d,e,f)

// if(Number.isInteger(a) && Number.isInteger(b)){
//     console.log(a % b, Math.floor(a/b))
// }

function changeContent(){
    if(a.innerHTML == "12345"){
    a.innerHTML = "helo"
    }
    else{
        a.innerHTML = "12345"
    }
}
 
let a = document.getElementById("test")



let button = document.getElementById("btn")

let color = "black"

button.addEventListener("click", () => {
    if(color == "black"){
        a.style = "color: red"
        color = "red"
    }
    else{
        a.style = "color: black"
        color = "black"
    }
})
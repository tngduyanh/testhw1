let a = prompt("What's your name?")
let b = prompt("What's your year of birth?") 

console.log(
    "Information:", a,",", "age:", 2021 - b
)

if(isNaN(b)){
    console.log("Date of birth: invalid",".","Typed:", b)
}
else{
    console.log("Date of birth: Valid")
}

let c = document.getElementById("test") 

let button = document.getElementById("btn")

let font_weight = "normal"

button.addEventListener("click", () => {
    if(font_weight == "normal"){
        c.style = "font-weight: bold"
        font_weight = "bold"
    }
    else{
        c.style = "font-weight: 0"
        font_weight = "normal"
    }
})

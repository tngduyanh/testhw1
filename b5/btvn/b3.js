let N = prompt("Nhập chiều dài cạnh của hình vuông tạo bởi các *")

let ans = ""

for (let i = 0; i < N; i++) {
   for (let j = 0; j < N; j++) {
       ans += "* "
   }    
   ans += "\n"
   
}

console.log(ans);
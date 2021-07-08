let N = prompt("Nhập số số hạng để tính tổng")
let a = []
let inp
for (let i = 0; i < N; i++) {
    inp = prompt("Điền số thứ"+ " "+(i+1))
    inp = Number.parseInt(inp)
    a.push(inp)
}

console.log(a);

let sum = 0
for (let i = 0; i < N; i++) {
    sum += a[i]
    
}

console.log("Tổng các số là " + sum);
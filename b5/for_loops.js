let a = [1,2,3,4,5]

for(let i = 0; i<5; i++){
    a[i] += 1
}

console.log(a);

let sum = 0
for(let i = 0; i<5; i++){
    sum += a[i]
}
console.log(sum)

a.push(5)
a.push(10)
a.push(-1)

console.log(a);

let max = a[0]
for(let i = 1;i<8;i++){
    if(max < a[i]){
        max = a[i]
    }
}
console.log(max);

a = a.sort((a,b) => a-b)
console.log(a);



let a = [1,2,3,4,5]
a.sort((a,b) => a-b)
console.log(a[a.length-2]);

let b = 0

for(let i=0;i<a.length;i++){
    if(a[i]>3){
        b++
    }
}
console.log(b);
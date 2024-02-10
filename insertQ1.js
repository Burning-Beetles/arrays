let arr = [10,20,30,40,50]
let n = 25 
let index = 2  


// [10,20,30,40,50]


// let pArr = [] 

// for(let i = 0;  i<index;i++){
//     pArr[i] = arr[i]
// }
// pArr.push(n)


// for(i = index; i<arr.length;i++){
//     pArr.push(arr[i])
// }

// console.log(pArr)


let arr1 = [10,20,30,40,50]
let n1 = 25 
let index1 = 2


for(let i = arr1.length-1; i>=index1; i--){
   arr1[i+1] = arr1[i]
   
}

arr1[index1] = n1

console.log(arr1)





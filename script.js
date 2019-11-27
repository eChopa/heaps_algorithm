const swap = (arr, index1, index2) => {
    let newArr = [...arr]
    let a = newArr[index1]
    newArr[index1] = newArr[index2]
    newArr[index2] = a
    return newArr
}
const genetator = (arr, k) => {
    if(k === 1){
        console.log(arr)
        return
    }
    else {
        genetator(arr, k-1)
        for(let i=0; i < k-1; i++){
            arr = (k%2==0)? swap(arr,0,k-1):swap(arr,i,k-1)
            genetator(arr,k-1)
        }
    }       
}
 const heap = (arr) => {
     genetator(arr, arr.length)
 }
function quickSort(arr){
    if (arr.length<2) {
        return arr
    }
    let pivot=arr[arr.length-1]
    let leftArr=[]
    let rightArr=[]
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i]<pivot) {
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
        
    }
  return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
}
let arr=[8,20,-2,4,-6]
console.log(quickSort(arr))

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, mid)
    let rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}
function merge(left, right) {
    let sortedArr = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}
let arr = [8, 20, -2, 4, -6]
console.log(mergeSort(arr))
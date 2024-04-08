function bubbleSort(arr) {
    let isSwap;
    do {
        isSwap = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < arr[i + 1]) {//use < (less than sign for assending) > (for descending)
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                isSwap = true
            }
        }
    } while (isSwap);
}
let arr = [, 32, 12, 4, 5, 3, -8]
bubbleSort(arr)
console.log(arr)
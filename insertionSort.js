function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let numberToInsert = array[i]
        let j = i - 1
        while (j >= 0 && array[j] > numberToInsert) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = numberToInsert
    }
}
let arr = [-6, 20, 8, -2, 4]
insertionSort(arr)
console.log(arr)
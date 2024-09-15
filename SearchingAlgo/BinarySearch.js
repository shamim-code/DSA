function BinarySearch(Arr, SearchValue) {
    let length = Arr.length;
    let left = 0;
    let right = length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (Arr[mid] === SearchValue) {
            return "Value is Found";
        }

        if (Arr[mid] > SearchValue) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return "Not Found"; 
}

const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const SearchValue = 105;

console.log(BinarySearch(Arr, SearchValue));

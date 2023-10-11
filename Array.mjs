class Array {
    #size = 0;
    #data = [];

    constructor(data) {
        this.#size = data.length;
        this.#data = data;
    }

    getSize() {
        return this.#size;
    }
    /*
    In this method we sort the array from a-z (rearrange the elements in the array in 
        increasing order)
    time complexity:O(n^2)    
    */
    sort() {
        let array = this.#data;
        let n = this.#size;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    // Swap array[j] and array[j+1]
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }

    getSortedData() {
        return this.#data;
    }
}

let countryData = ["palestine", "jordan", "syria", "lebanon"];
let countries = new Array(countryData);

console.log("Original array:");
console.log(countryData);
countries.sort(); // Sort the array
console.log("Sorted array:");
console.log(countries.getSortedData());

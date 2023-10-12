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
    /*
    In this method we sort the array from z-a (rearrange the elements in the array in 
     decreasing order)
    time complexity:O(n^2)    
    */
    decreasingSort() {
        let array = this.#data;
        let n = this.#size;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (array[j] < array[j + 1]) {
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

    // In this method we search for a country and return all results that close to the input 

    searchByCountry(input) {
        input = input.toLowerCase();
        let result = this.#data.filter(country => country.toLowerCase().includes(input));
        return result;
    }
}

let countryData = ["palestine", "jordan", "syria", "lebanon"];
let countries = new Array(countryData);

console.log("Original array:");
console.log(countryData);
countries.sort(); // Sort the array
console.log("Sorted array:");
console.log(countries.getSortedData());

countries.decreasingSort(); // Sort the array in decreasing order
console.log("Sorted array in decreasing order:");
console.log(countries.getSortedData());
let searchItem = "r"; // the output will be syria and jordan
let searchResults = countries.searchByCountry(searchItem);
console.log(`Search results for "${searchItem}":`);
console.log(searchResults);
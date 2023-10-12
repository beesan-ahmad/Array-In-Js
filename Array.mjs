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
    searchByName(input1) {
        if (!input1 || typeof input1 !== 'string') {
            return "Please enter a valid search input.";
        }
        input1 = input1.toLowerCase();
        let resultOfSearch = this.#data.filter(country => country.toLowerCase().includes(input1));
        if (resultOfSearch.length === 0) {
            return `No results found for "${input1}".`;
        }
        return resultOfSearch;


    }
    /*
    This function looks for a country and returns exactly the same result. I also check out for
     attempts by the user to enter erroneous data, such as null or not a string, and I notify him 
     if the input he entered to search for is not found. 
    */
    searchExact(input2) {
        if (!input2 || typeof input2 !== 'string') {
            return "Please enter a valid search input.";
        }
        // Convert the input1 to lowercase for case-insensitive matching 
        input2 = input2.toLowerCase();
        let resultsOfExactSearch = this.#data.filter(country => country.toLowerCase() === input2);

        if (resultsOfExactSearch.length === 0) {
            return `No results found for "${input2}".`;
        }

        return resultsOfExactSearch;
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
let searchItem1 = "z"; // no result found
let searchResults = countries.searchByName(searchItem1);
console.log(`Search results for "${searchItem1}":`);
console.log(searchResults);

let searchItem2 = "iraq"; // no result found
let exactSearchResults = countries.searchExact(searchItem2);
console.log(`Exact Search results : "${searchItem2}":`);
console.log(exactSearchResults);
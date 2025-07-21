// review 1:
// write a function that finds the longest string in an array


// input: an array of strings
// output: longest string 

// initialize an empty string as the longest
// for loop or for each through each string in the array
// if string length > longest length; set longest to string
// return longest string



// const findLongest = (strings) =>{
//     let longest = '';
//     for(i = 0; i < strings.length; i++)
//         if(strings[i].length > longest.length ){
//             longest = strings[i];
//         }
//         return longest
// }
// console.log(findLongest(['taco', 'pizza', 'cheesburger']));



// review 2:
// Filter numbers greater than 10 from a nested array

// input nested array
// output a flat array of numbers > 10

// initialze an empty array to store results (nums > 10)

// for loop that looks at each index in the outer array until each outer index is looked at

// for loop that looks at each nested array until each nested array is looked at

//  if each index in the nest array > 10 add it to the empty array

// return result

const filterNums = (arr) => {
    let results = [];
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length; j++){
            if(arr[i][j] > 10){
                results.push(arr[i][j]);
            }
        }
    }
    return results;
}

console.log(filterNums([[5, 15], [2, 20]]));

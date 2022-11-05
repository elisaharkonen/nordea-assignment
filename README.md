# nordea-assingment

This document is used for Nordea OneDigital Graduate Program coding assignments.

## Task 1

In task 1 50 random numbers between 0 and 1000 are generated to print the output to console. I chose to use Javascript, as it belongs to C languages and might be more common than C# of which I have little experience from.

I began by finding out how to generate random numbers: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Then I started to solve the first task using a for loop:

```
for (var i = 0; i < 50; i++) {
        console.log(A(0,1001));
    }
```

In this loop A-function is called for 50 times and the output is presented in the console. The A-function generates a random number. This function is created with help from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

```
function A(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
}
```

## Task 2

In this task the 50 random numbers from task 1 are supposed to be written to a txt-file.

I began by researching writing output to a txt file, and found a fs.writefile-function from: https://stackoverflow.com/questions/2496710/writing-to-files-in-node-js.

```
let result = "";
 for (var i = 0; i < 50; i++) {
        result = result + (A(0,1001)) + " ";
    }
```
Here by using the syntax from task 1 the randomly generated numbers are saved into a result-variable. Next I used the information from above about writing into a txt-file:

```
fs.writeFile("task-2.txt", result, (err) => {
    if (err) {
        throw err;
        }
    });
```

## Task 3

In the third task I used the randomly generated numbers from previous tasks and write only even numbers in ascending order into the txt-file.

Using the for loop I generated the random numbers like in the previous tasks and saved them to result-array. I found out how to solve whether a number is an even or an odd one (https://stackoverflow.com/questions/6211613/testing-whether-a-value-is-odd-or-even) and utilized it in an if-condition inside the loop. Here I use the same A-function as in previous tasks.
```
let result2 = [];
 for (var i = 0; i < 50; i++) {
        let temp = A(0,1001);
        if (temp % 2 == 0){
            result2.push(temp);
        }
    }
```

Next I found out how to write the numbers in an ascending order (https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly)

```
    result2.sort((a, b)=>{return a-b});
```

After which using the same writefile-function the numbers are written into the txt-file:

```
 fs.writeFile("task-3.txt", result2, (err) => {
        if (err) {
            throw err;
        }
    });
```


## Task 4 & 5

I don't have experience in API fetches so I was not able to complete the last two tasks.

First I would need to fetch the information from the website and look for the correct endpoint from which I'm able to pull the information. Then as the data comes in json format, I would parse the response and display the correct data in a readable format in excel. 
'use strict';

/////Task 2/////

function getMin(arr) {
    return Math.min.apply(null, arr);
}

console.log(getMin([1, 2, 5, 10, 25, -25]));

/////OR/////

function getMin1(arr) {
    let min = arr[0];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

console.log(getMin1([6, 5, 1, 25]));

/////Task 3/////

function getEven(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(getEven([2, 4, 5, 7, 16]));

/////Task 4/////

let arr = [{name: 'Jhony Walker', birthDate: '1995-12-17'},
           {name: 'Andrew', birthDate: '1990-11-03'},
           {name: 'Bob', birthDate: '1998-12-17'},
           {name: 'Andrew', birthDate: '2001-05-06'}];

function searchByName(name) {
    let search = [];
    for(let i = 0; i < arr.length; i++) {
        for(let key in arr[i]) {
            if(arr[i][key] == name) {
                search.push(arr[i]);
            }
        }
    }

    return search;
}

console.log(searchByName('Andrew'));

AOS.init();
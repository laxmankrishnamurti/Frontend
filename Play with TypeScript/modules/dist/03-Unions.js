"use strict";
// We would prefer to use unions in such scenarios where we have "OR" case. We have two options to choose either go with this one or that one. 
function printId(id) {
    console.log("id : ", id);
}
printId(4);
//Problem :- Let say we want do some operations on the string that we are receving in the printId function. How can we do that? How do we know that the value that we are receving in that function has number or string type. 
function getId(id) {
    // return id.toUpperCase();
}
getId("Kawya Krishnamurti");
// This is because number does not have .toUpperCase() method. 
/**
 * SOLUTION :- NARROWING
 */
function generateId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
generateId("Kawya Krishnamurti");
function getFirstThree(x) {
    console.log(x.slice(0, 3));
}
getFirstThree("Laxman"); //Output : Lax
getFirstThree([1, 2, 3, 4, 5, 6, 7, 8, 9]); //Output : [1,2,3]

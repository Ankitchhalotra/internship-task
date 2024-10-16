// Q1 memoization
let hello = "Hello";

function memoization() { 
    let name = "Aayush"; 
    console.log(`${hello} ${name}!`); 
}
memoization();



// Q2 currying 
function simpleFunction(p1, p2, p3) {
    return p1 + p2 + p3;
}

function curriedFunction(p1) {
    return function(p2) {
        return function(p3) {
            return p1 + p2 + p3;
        };
    };
}

// Q3 Function Composition
const f = (x) => x+2;
const g = (x) => x*3;

const composedFunction = (x) => f(g(x))
console.log(composedFunction(2))


// Q4 Debounce Function
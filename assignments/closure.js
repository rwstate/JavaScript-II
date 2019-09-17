// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
beans = 3;
const howManyBeans = () => {console.log(beans)};

howManyBeans();
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
var counterMaker = (limit) => {
  var count = 0;
  return function () {
    if (count > limit - 1) {
      count = 0
    }
    count +=1
    console.log(count)
  }
};

var myCounter = counterMaker();


// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
counterLimit3 = counterMaker(3)

counterLimit3()
counterLimit3()
counterMaker()
counterLimit3()
counterLimit3()
counterLimit3()
counterLimit3()



// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0
  return {
    increment: function() {
      count += 1
      console.log(count)
    },

    decrement: function () {
      count -= 1
      console.log(count)
    }

  }
};

var controlledCounter = counterFactory();

controlledCounter.decrement()
controlledCounter.decrement()
controlledCounter.increment()

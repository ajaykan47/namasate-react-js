// function example

function x() {
  const a = 10;
}

var xyz = 30; // function excution context is created

var x = function () {
  console.log(" I 'm an anonymous function");
};

30; // expression (What is expression?)

// function test() {
//     return function () {

//     }
// }

// What i scame in JS6
//  Arrow funtion

// arrow is also know as fat arrow,
// The only different over here is that about the this variable.
const fn = () => {};

const obj = {
  fn: function () {
    console.log(this);
  },
  //arrow function
  fn2: () => {
    console.log(this);
  },
};

obj.fn(); // obj

obj.fn2(); // window

// another example

function ax() {
  console.log(this);
  function ay() {
    console.log(this);
    function az() {
      console.log(this);
    }
    az();
  }
  ay();
}
ax();

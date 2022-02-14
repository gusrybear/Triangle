//verification has 3 module isTriangle, missingInputField, invalidInput

//input : side1, side2, side3 and Enter button
//output : isValid, invalidFieldID

// 3 condition
// If !invalidInput => isValid = false, invalidFieldID[] = this.invalidFieldID[]
// If !missingInputField => isValid = false
// If !isTriangle => isValid = false
// else => isValid = true

//global data
var side1;
var side2;
var side3;
var isValid = false;
var invalidFieldID;

function isNumber(n) {
  return typeof n == "number" && !isNaN(n) && isFinite(n) && n>0;
}

function invalidInput() {
  let invalidInput = false;
   
  //change from string to float
  side1 = parseFloat(side1);
  side2 = parseFloat(side2);
  side3 = parseFloat(side3);

  //check number > 0 and is real number
  if (isNumber(side1)) {
    console.log("1 is number");
    console.log(side1);
  }else{
      console.log("1 isn't number");
      console.log(side1);
  }
  if (isNumber(side2)) {
    console.log("2 is number");
    console.log(side2);
  }
  if (isNumber(side2)) {
    console.log("3 is number");
    console.log(side3);
  }

  console.log(result);
}

function isTriangle() {
  let isTriangle = false;
}

function missingInputField() {
  let missingInputField = false;

  if (side1 === "" && side2 === "" && side3 === "") {
    //set 3 border alert
    missingInputField = true;
    console.log("1,2,3");
  } else if (side1 === "" && side2 === "") {
    //set 1,2 border alert
    missingInputField = true;
    console.log("1,2");
  } else if (side1 === "" && side3 === "") {
    //set 1,3 border alert
    missingInputField = true;
    console.log("1,3");
  } else if (side2 === "" && side3 === "") {
    //set 2,3 border alert
    missingInputField = true;
    console.log("2,3");
  } else {
    if (side1 === "") {
      //set 1 border alert
      missingInputField = true;
      console.log("1");
    } else if (side2 === "") {
      //set 2 border alert
      missingInputField = true;
      console.log("2");
    } else if (side3 === "") {
      //set 3 border alert
      missingInputField = true;
      console.log("3");
    } else {
      missingInputField = false;
      console.log("0000");
    }
  }

  return missingInputField;
}

function Verification() {
  side1 = document.getElementById("inp1").value;
  side2 = document.getElementById("inp2").value;
  side3 = document.getElementById("inp3").value;

  if (missingInputField()) {
    console.log("not full info");
  } else {
    invalidInput();
  }
  // console.log("hello from veri")
}

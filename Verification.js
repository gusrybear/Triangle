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
var invalidFieldID = [];

//check real number
function isNumber(n) {
  return typeof n == "number" && !isNaN(n) && isFinite(n) && n > 0;
}

function setColorBorder(item, index) {
  if (item !== "") {
    document.getElementById("inp" + item).style.borderStyle = "solid";
    document.getElementById("inp" + item).style.borderColor = "red";
  }
}

function invalidInput() {
  let invalidInput = false;
  // check 0 in front input number
  if (side1[0] === "0" && side2[0] === "0" && side3[0] === "0") {
    document.getElementById("inp0").style.borderStyle = "solid";
    document.getElementById("inp0").style.borderColor = "red";
    document.getElementById("inp1").style.borderStyle = "solid";
    document.getElementById("inp1").style.borderColor = "red";
    document.getElementById("inp2").style.borderStyle = "solid";
    document.getElementById("inp2").style.borderColor = "red";
    setTimeout(function () {
      alert("Has 0 PLEASE RE ENTER NUMBER");
      location.reload();
    }, 10);
  } else if (side1[0] === "0" && side2[0] === "0") {
    document.getElementById("inp0").style.borderStyle = "solid";
    document.getElementById("inp0").style.borderColor = "red";
    document.getElementById("inp1").style.borderStyle = "solid";
    document.getElementById("inp1").style.borderColor = "red";
    setTimeout(function () {
      alert("Has 0 PLEASE RE ENTER NUMBER");
      location.reload();
    }, 10);
  } else if (side1[0] === "0" && side3[0] === "0") {
    document.getElementById("inp0").style.borderStyle = "solid";
    document.getElementById("inp0").style.borderColor = "red";
    document.getElementById("inp2").style.borderStyle = "solid";
    document.getElementById("inp2").style.borderColor = "red";
    setTimeout(function () {
      alert("Has 0 PLEASE RE ENTER NUMBER");
      location.reload();
    }, 10);
  } else if (side2[0] === "0" && side3[0] === "0") {
    document.getElementById("inp1").style.borderStyle = "solid";
    document.getElementById("inp1").style.borderColor = "red";
    document.getElementById("inp2").style.borderStyle = "solid";
    document.getElementById("inp2").style.borderColor = "red";
    setTimeout(function () {
      alert("Has 0 PLEASE RE ENTER NUMBER");
      location.reload();
    }, 10);
  } else if (side1[0] === "0") {
    //set 1 border alert
    missingInputField = true;
    document.getElementById("inp0").style.borderStyle = "solid";
    document.getElementById("inp0").style.borderColor = "red";
    setTimeout(function () {
      alert("Has 0 PLEASE RE ENTER NUMBER");
      location.reload();
    }, 10);
  } else if (side2[0] === "0") {
    //set 2 border alert
    missingInputField = true;
    document.getElementById("inp1").style.borderStyle = "solid";
    document.getElementById("inp1").style.borderColor = "red";
    setTimeout(function () {
      alert("Has 0 PLEASE RE ENTER NUMBER");
      location.reload();
    }, 10);
  } else if (side3[0] === "0") {
    //set 3 border alert
    missingInputField = true;
    document.getElementById("inp2").style.borderStyle = "solid";
    document.getElementById("inp2").style.borderColor = "red";
    setTimeout(function () {
      alert("Has 0 PLEASE RE ENTER NUMBER");
      location.reload();
    }, 10);
  } else {
    missingInputField = false;
  }

  side1 = parseFloat(side1);
  side2 = parseFloat(side2);
  side3 = parseFloat(side3);

  console.log(side1, side2, side3);
  //check number > 0 and is real number
  if (isNumber(side1)) {
  } else {
    invalidInput = true;
    //push index in invalid array
    invalidFieldID.push("0");
  }
  if (isNumber(side2)) {
  } else {
    invalidInput = true;
    invalidFieldID.push("1");
  }
  if (isNumber(side3)) {
  } else {
    invalidInput = true;
    invalidFieldID.push("2");
  }
  //check invalid index
  if (invalidFieldID.length === 0) {
    console.log("is valid");
  } else {
    invalidFieldID.forEach(setColorBorder);
    console.log("Not valid");
    setTimeout(function () {
      alert("Please Re-Enter New Input");
      location.reload();
    }, 10);
  }

  console.log("Not right input index", invalidFieldID);

  return invalidInput;
}
1,2,3
function isTriangle() {
  let isTriangle = false;
  if (
    !invalidInput() &&    
    (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1)
  ) {
    isTriangle = true;
  }
  return isTriangle;
}

function missingInputField() {
  let missingInputField = false;

  if (side1 === "" && side2 === "" && side3 === "") {
    //set 3 border alert
    missingInputField = true;
    document.getElementById("inp0").style.borderStyle = "solid";
    document.getElementById("inp0").style.borderColor = "red";
    document.getElementById("inp1").style.borderStyle = "solid";
    document.getElementById("inp1").style.borderColor = "red";
    document.getElementById("inp2").style.borderStyle = "solid";
    document.getElementById("inp2").style.borderColor = "red";
    setTimeout(function () {
      alert("Missing Field 1,2,3");
      location.reload();
    }, 10);
  } else if (side1 === "" && side2 === "") {
    //set 1,2 border alert
    missingInputField = true;
    document.getElementById("inp0").style.borderStyle = "solid";
    document.getElementById("inp0").style.borderColor = "red";
    document.getElementById("inp1").style.borderStyle = "solid";
    document.getElementById("inp1").style.borderColor = "red";
    setTimeout(function () {
      alert("Missing Field 1,2");
      location.reload();
    }, 10);
  } else if (side1 === "" && side3 === "") {
    //set 1,3 border alert
    missingInputField = true;
    document.getElementById("inp0").style.borderStyle = "solid";
    document.getElementById("inp0").style.borderColor = "red";
    document.getElementById("inp2").style.borderStyle = "solid";
    document.getElementById("inp2").style.borderColor = "red";
    setTimeout(function () {
      alert("Missing Field 1,3");
      location.reload();
    }, 10);
  } else if (side2 === "" && side3 === "") {
    //set 2,3 border alert
    missingInputField = true;
    document.getElementById("inp1").style.borderStyle = "solid";
    document.getElementById("inp1").style.borderColor = "red";
    document.getElementById("inp2").style.borderStyle = "solid";
    document.getElementById("inp2").style.borderColor = "red";
    setTimeout(function () {
      alert("Missing Field 2,3");
      location.reload();
    }, 10);
  } else {
    if (side1 === "") {
      //set 1 border alert
      missingInputField = true;
      document.getElementById("inp0").style.borderStyle = "solid";
      document.getElementById("inp0").style.borderColor = "red";
      setTimeout(function () {
        alert("Missing Field 1");
        location.reload();
      }, 10);
    } else if (side2 === "") {
      //set 2 border alert
      missingInputField = true;
      document.getElementById("inp1").style.borderStyle = "solid";
      document.getElementById("inp1").style.borderColor = "red";
      setTimeout(function () {
        alert("Missing Field 2");
        location.reload();
      }, 10);
    } else if (side3 === "") {
      //set 3 border alert
      missingInputField = true;
      document.getElementById("inp2").style.borderStyle = "solid";
      document.getElementById("inp2").style.borderColor = "red";
      setTimeout(function () {
        alert("Missing Field 3");
        location.reload();
      }, 10);
    } else {
      missingInputField = false;
    }
  }

  return missingInputField;
}

function Verification() {
  //reset all input and clear invalidFieldID
  side1 = document.getElementById("inp0").value;
  side2 = document.getElementById("inp1").value;
  side3 = document.getElementById("inp2").value;
  isValid = false;
  invalidFieldID = [];

  //check missing field and check isValid
  if (missingInputField()) {
  } else {
    if (isTriangle()) {
      isValid = true;
    } else {
      isValid = false;
      document.getElementById("resultBox").value = "Not a Valid triangle";
    }
  }

  console.log("is this triangle", isValid);
  if (isValid) {
    Calculation();
  }
}

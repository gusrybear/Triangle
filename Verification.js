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
    if (parseFloat(document.getElementById("inp0").value) === 0 && parseFloat(document.getElementById("inp1").value) === 0 && parseFloat(document.getElementById("inp2").value) === 0) {
        document.getElementById("inp0").style.borderStyle = "solid";
        document.getElementById("inp0").style.borderColor = "red";
        document.getElementById("inp1").style.borderStyle = "solid";
        document.getElementById("inp1").style.borderColor = "red";
        document.getElementById("inp2").style.borderStyle = "solid";
        document.getElementById("inp2").style.borderColor = "red";
        setTimeout(function() {
            alert("Has 0 PLEASE RE ENTER NUMBER");
            location.reload();
        }, 10);
    } else if (parseFloat(document.getElementById("inp0").value) === 0 && parseFloat(document.getElementById("inp1").value) === 0) {
        document.getElementById("inp0").style.borderStyle = "solid";
        document.getElementById("inp0").style.borderColor = "red";
        document.getElementById("inp1").style.borderStyle = "solid";
        document.getElementById("inp1").style.borderColor = "red";
        setTimeout(function() {
            alert("Has 0 PLEASE RE ENTER NUMBER");
            location.reload();
        }, 10);
    } else if (parseFloat(document.getElementById("inp0").value) === 0 && parseFloat(document.getElementById("inp2").value) === 0) {
        document.getElementById("inp0").style.borderStyle = "solid";
        document.getElementById("inp0").style.borderColor = "red";
        document.getElementById("inp2").style.borderStyle = "solid";
        document.getElementById("inp2").style.borderColor = "red";
        setTimeout(function() {
            alert("Has 0 PLEASE RE ENTER NUMBER");
            location.reload();
        }, 10);
    } else if (parseFloat(document.getElementById("inp1").value) === 0 && parseFloat(document.getElementById("inp2").value) === 0) {
        document.getElementById("inp1").style.borderStyle = "solid";
        document.getElementById("inp1").style.borderColor = "red";
        document.getElementById("inp2").style.borderStyle = "solid";
        document.getElementById("inp2").style.borderColor = "red";
        setTimeout(function() {
            alert("Has 0 PLEASE RE ENTER NUMBER");
            location.reload();
        }, 10);
    } else if (parseFloat(document.getElementById("inp0").value) === 0) {
        //set 1 border alert
        missingInputField = true;
        document.getElementById("inp0").style.borderStyle = "solid";
        document.getElementById("inp0").style.borderColor = "red";
        setTimeout(function() {
            alert("Has 0 PLEASE RE ENTER NUMBER");
            location.reload();
        }, 10);
    } else if (parseFloat(document.getElementById("inp1").value) === 0) {
        //set 2 border alert
        missingInputField = true;
        document.getElementById("inp1").style.borderStyle = "solid";
        document.getElementById("inp1").style.borderColor = "red";
        setTimeout(function() {
            alert("Has 0 PLEASE RE ENTER NUMBER");
            location.reload();
        }, 10);
    } else if (parseFloat(document.getElementById("inp2").value) === 0) {
        //set 3 border alert
        missingInputField = true;
        document.getElementById("inp2").style.borderStyle = "solid";
        document.getElementById("inp2").style.borderColor = "red";
        setTimeout(function() {
            alert("Has 0 PLEASE RE ENTER NUMBER");
            location.reload();
        }, 10);
    } else {
        missingInputField = false;
    }

    //check if sqrt include and parse to float
    if (side1.includes("sqrt")) {
        side1 = side1.split(/([0-9]+)/);
        side1 = side1[1];
        side1 = parseFloat(side1);
        side1 = Math.sqrt(side1);
    } else {
        side1 = parseFloat(side1);
    }
    if (side2.includes("sqrt")) {
        side2 = side2.split(/([0-9]+)/);
        side2 = side2[1];
        side2 = parseFloat(side2);
        side2 = Math.sqrt(side2);
    } else {
        side2 = parseFloat(side2);
    }
    if (side3.includes("sqrt")) {
        side3 = side3.split(/([0-9]+)/);
        side3 = side3[1];
        side3 = parseFloat(side3);
        side3 = Math.sqrt(side3);
    } else {
        side3 = parseFloat(side3);
    }


    //check number > 0 and is real number
    if (isNumber(side1)) {} else {
        invalidInput = true;
        //push index in invalid array
        invalidFieldID.push("0");
    }
    if (isNumber(side2)) {} else {
        invalidInput = true;
        invalidFieldID.push("1");
    }
    if (isNumber(side3)) {} else {
        invalidInput = true;
        invalidFieldID.push("2");
    }
    //check invalid index
    if (invalidFieldID.length === 0) {} else {
        invalidFieldID.forEach(setColorBorder);
        console.log("Not valid");
        setTimeout(function() {
            alert("Please Re-Enter New Input");
            location.reload();
        }, 10);
    }

    return invalidInput;
}

function isTriangle() {
    let isTriangle = false;
    if (!invalidInput() &&
        side1 + side2 > side3 &&
        side1 + side3 > side2 &&
        side2 + side3 > side1
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
        setTimeout(function() {
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
        setTimeout(function() {
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
        setTimeout(function() {
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
        setTimeout(function() {
            alert("Missing Field 2,3");
            location.reload();
        }, 10);
    } else {
        if (side1 === "") {
            //set 1 border alert
            missingInputField = true;
            document.getElementById("inp0").style.borderStyle = "solid";
            document.getElementById("inp0").style.borderColor = "red";
            setTimeout(function() {
                alert("Missing Field 1");
                location.reload();
            }, 10);
        } else if (side2 === "") {
            //set 2 border alert
            missingInputField = true;
            document.getElementById("inp1").style.borderStyle = "solid";
            document.getElementById("inp1").style.borderColor = "red";
            setTimeout(function() {
                alert("Missing Field 2");
                location.reload();
            }, 10);
        } else if (side3 === "") {
            //set 3 border alert
            missingInputField = true;
            document.getElementById("inp2").style.borderStyle = "solid";
            document.getElementById("inp2").style.borderColor = "red";
            setTimeout(function() {
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
    if (missingInputField()) {} else {
        if (isTriangle()) {
            isValid = true;
        } else {
            isValid = false;
            document.getElementById("resultBox").value = "Not a Valid triangle";
        }
    }

    if (isValid) {
        console.log(side1, ' ', side2, ' ', side3)
        Calculation();
    }
}
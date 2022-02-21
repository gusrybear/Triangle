var result = '';

function Calculation() {
    let type = [];
    // console.log()
    // console.log(side1,' ',side2,' ',side3)
    if (isEquilateral() != ' ') type.push(isEquilateral());
    if (isScalene() != ' ') type.push(isScalene());
    if (isIsosceles() != ' ') type.push(isIsosceles());
    if (isRightTriangle() != ' ') type.push(isRightTriangle());

    totalRS = type.length;
    result = '';

    for (i = 0; i < totalRS; i++) {
        result += type.shift();
        if (i + 1 < totalRS) result += ', ';
    }

    document.getElementById("resultBox").value = result;
}

function isEquilateral() {
    if (side1 == side2 && side2 == side3)
        return 'Equilateral Triangle';
    else return ' ';
}

function isScalene() {
    if (side1 != side2 && side1 != side3 && side2 != side3)
        return 'Scalene Triangle';
    else return ' ';
}

function isIsosceles() {
    if ((side1 == side2 && side1 != side3) || (side1 == side3 && side1 != side2) || (side2 == side3 && side1 != side2))
        return 'Isosceles Triangle';
    else return ' ';
}

function isRightTriangle() {
    if (side1 * side1 == side2 * side2 + side3 * side3 || side2 * side2 == side1 * side1 + side3 * side3 || side3 * side3 == side1 * side1 + side2 * side2)
    {
        
        return 'Right Triangle';
    }
    else return ' ';
}

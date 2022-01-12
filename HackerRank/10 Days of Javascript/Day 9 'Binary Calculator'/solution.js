<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
    </head>
    
    <body>
        <input id="res"></input>
<div id="btns">
    <button id="btn0">0</button>
    <button id="btn1">1</button>
    <button id="btnClr">C</button>
    <button id="btnEql">=</button>
    <button id="btnSum">+</button>
    <button id="btnSub">-</button>
    <button id="btnMul">*</button>
    <button id="btnDiv">/</button>
</div>
        <script src="js/binaryCalculator.js" type="text/javascript"></script>
    </body>
</html>

  /* CSS */
body {
    width: 33%;
}

#res {
    background-color: light-gray;
    border: solid;
    height: 48px;
    font-size: 20px;
}

button {
    width: 25%;
    height: 36px;
    font-size: 18px;
    margin: 0px;
    float: left;
}

#btn0, #btn1 {
    background-color: lightgreen;
    color: brown;
}

#btnClr, #btnEql {
    background-color: darkgreen;
    color: white;
}

#btnSum, #btnSub, #btnMul, #btnDiv {
    background-color: black;
    color: red;
}


// JS
const ids = [1, 2, 3, 6, 9, 8, 7, 4]; // start position ids in clockwise order
let nums = [1, 2, 3, 6, 9, 8, 7, 4]; // rotate in clockwise order
let btn5 = document.getElementById("btn5");

btn5.onclick = function() {
    nums.unshift(nums.pop());
    for (i = 0; i <= 7; i++) {
        document.getElementById("btn" + ids[i]).innerHTML = nums[i];
    }
};
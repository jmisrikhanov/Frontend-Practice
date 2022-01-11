// <!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
    </head>
    
    <body>
        <div id="btns">
    <button id="btn1">1</button>
    <button id="btn2">2</button>
    <button id="btn3">3</button>
    <button id="btn4">4</button>
    <button id="btn5">5</button>
    <button id="btn6">6</button>
    <button id="btn7">7</button>
    <button id="btn8">8</button>
    <button id="btn9">9</button>
</div>
        <script src="js/buttonsGrid.js" type="text/javascript"></script>
    </body>
</html>


{/* CSS */}

  #btns {
  width: 75%;
}

button {
  width: 30%;
  height: 48px;
  font-size: 24px;
}


{/* JS */}

const ids = [1, 2, 3, 6, 9, 8, 7, 4]; // start positions ids in clockwise order
let nums = [1, 2, 3, 6, 9, 8, 7, 4]; // rotating in clockwise order
let btn5 = document.getElementById("btn5");

btn5.onclick = function() {
  nums.unshift(nums.pop());
  for (i = 0; i <= 7; i++) {
    document.getElementById("btn" + ids[i]).innerHTML = nums[i];
  }
};
const gameMsg = document.getElementById('msg');
gameMsg.innerHTML = "Press the lucky button!";
let timeoutID1, timeoutID2, timeoutID3;
let middleBoxes = ["", "", ""];
document.getElementById("middle1").innerHTML = "A";
document.getElementById("middle2").innerHTML = "A";
document.getElementById("middle3").innerHTML = "A";

function getRandomNr(min, max) {
  return Math.random() * (max - min) + min;
}

function setOutput1(outputContent1, outputContent2, outputContent3) {      
  document.getElementById("down1").innerHTML = outputContent1;
  document.getElementById("middle1").innerHTML = outputContent2;
  document.getElementById("up1").innerHTML = outputContent3;  
}

function setOutput2(outputContent4, outputContent5, outputContent6) {
  document.getElementById("down2").innerHTML = outputContent4;
  document.getElementById("middle2").innerHTML = outputContent5;
  document.getElementById("up2").innerHTML = outputContent6;
}

function setOutput3(outputContent7, outputContent8, outputContent9) {
  document.getElementById("down3").innerHTML = outputContent7;
  document.getElementById("middle3").innerHTML = outputContent8;
  document.getElementById("up3").innerHTML = outputContent9;
}

function playGame() {
  let chars = "ABCDE";
  let charsNumber = chars.length;
  let rnd = getRandomNr(10, 30);
  let multiply = 0;
  let min1 = rnd, min2, min3;
  setOutput1(chars[0], chars[1], chars[2]);
  setOutput2(chars[0], chars[1], chars[2]);
  setOutput3(chars[0], chars[1], chars[ 2]);
  let nextPos = 0, a = 0, b = 1, c = 2;
  for (let i = 0; i < rnd; ++i) {
    if (nextPos > charsNumber - 1) {
      nextPos = 0;
      a = 0;
      b = 1;
      c = 2;
    }  
    if (nextPos === charsNumber - a) {
      a -= charsNumber;
    }
    else if (nextPos === charsNumber - b) {
      b -= charsNumber;
    }
    else if (nextPos === charsNumber - c) {
      c -= charsNumber;
    }
    timeoutID1 = setTimeout(setOutput1, multiply*1000, chars[nextPos + a], chars[nextPos + b], chars[nextPos + c]);
    multiply += 0.2;
    ++nextPos;
  }
  multiply = 0;
  rnd = getRandomNr(min1, 30);
  min2 = rnd;
  for (let j = 0; j < rnd; ++j) {
    if (nextPos > charsNumber - 1) {
      nextPos = 0;
      a = 0;
      b = 1;
      c = 2;
    }  
    if (nextPos === charsNumber - a) {
      a -= charsNumber;
    }
    else if (nextPos === charsNumber - b) {
      b -= charsNumber;
    }
    else if (nextPos === charsNumber - c) {
      c -= charsNumber;
    }
    timeoutID2 = setTimeout(setOutput2, multiply*1000, chars[nextPos + a], chars[nextPos + b], chars[nextPos + c]);
    multiply += 0.2;
    ++nextPos;
  }
  multiply = 0;
  rnd = getRandomNr(min2, 30);
  for (let k = 0; k < rnd; ++k) {
    if (nextPos > charsNumber - 1) {
      nextPos = 0;
      a = 0;
      b = 1;
      c = 2;
    }  
    if (nextPos === charsNumber - a) {
      a -= charsNumber;
    }
    else if (nextPos === charsNumber - b) {
      b -= charsNumber;
    }
    else if (nextPos === charsNumber - c) {
      c -= charsNumber;
    }
    timeoutID3 = setTimeout(setOutput3, multiply*1000, chars[nextPos + a], chars[nextPos + b], chars[nextPos + c]);
    multiply += 0.2;
    ++nextPos;
    gameMsg.innerHTML = "Let's see...wait...";
  }
  multiply += 0.2;
  setTimeout(function() {
    winCases();
  }, multiply*1000); 
}

function winCases() {
  middleBoxes[0] = document.getElementById("middle1").innerHTML;
  middleBoxes[1] = document.getElementById("middle2").innerHTML;
  middleBoxes[2] = document.getElementById("middle3").innerHTML;
  if (middleBoxes[0] === middleBoxes[1] && middleBoxes[1] === middleBoxes[2]) {
    gameMsg.innerHTML = "Congratulations! You won!";
  }
  else {
    gameMsg.innerHTML = "Ooo... Play again!";
  }
}
  
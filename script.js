const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".message");

btn.addEventListener("click", vowelCount);

function vowelCount() {
  let vowelCountNum = 0;
  let wordVal = word.value.toLowerCase();
  for (let i = 0; i < wordVal.length; i++) {
    let letter = wordVal[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      vowelCountNum++;
    }
  }
  result.innerHTML = `${word.value.toUpperCase()} has ${vowelCountNum} vowels`;
}

//grab img Elements
var rightArrow = document.getElementById("rightArrow");
var leftArrow = document.getElementById("leftArrow");


//add listener to window click
window.addEventListener("click", showDirection)

function showDirection (e) {
  var randomNumber = Math.random();
  console.log(randomNumber)
  if (randomNumber < .5) {
    rightArrow.classList.remove("hidden")
    rightArrow.classList.add("shown")
    leftArrow.classList.add("hidden")
    leftArrow.classList.remove("shown")
  } else {
    rightArrow.classList.remove("shown")
    rightArrow.classList.add("hidden")
    leftArrow.classList.remove("hidden")
    leftArrow.classList.add("shown")
  }

}
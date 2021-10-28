const buttons = document.querySelectorAll("button");
const displayElement = document.getElementsByClassName("displayElement");
const segmentValues = [
  [1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 0, 0, 0, 0],
  [1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 0, 1],
  [0, 1, 1, 0, 0, 1, 1],
  [1, 0, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1],
  [1, 0, 0, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 0],
];

function displayOn(number){
    segmentValues[number].forEach((value, index) => {
        if (value == 1) {
          displayElement[index].style.setProperty("--displayColor", "red");
        } else {
          displayElement[index].style.setProperty(
            "--displayColor",
            "#202020"
          );
        }
    });
}

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let number = e.target.outerText;
    console.log(number);
    if (number == "E") {
      number = 10;
    } else if (number == "U") {
      number = 11;
    } else if (number == "Countdown from 0 to 9") {
      const CountdownUP = document.getElementById("btnCoundDownUP");
      let i = 0;
        setInterval(() => {
            if(i<10){
                displayOn(i);
        i++;}
        }, 1000);
    } else if (number == "Countdown from 9 to 0") {
        const CountdownDown = document.getElementById("btnCoundDownDown");
      let i = 9;
        setInterval(() => {
            if(i>-1){
                displayOn(i);
        i--;}
        }, 1000);
    } else {
      number = parseInt(number);
    }
    displayOn(number);
  });
});

const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");

// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;
/**
 * Exercise 1
 *
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 * 
 * <div class="timer timer_1">
  <div class="remove"></div>
  <h3>0 <span>00</span></h3>
  <div class="btn">
    <button class="reset">Reset</button>
    <button class="stop">Stop</button>
  </div><!--.btn end-->
</div><!--.timer end-->
 */

const createTimerEl = (number) => {
  // div.timer
  const divTimer = document.createElement("div");
  divTimer.classList.add("timer", `timer_${number}`);
  divTimer.innerHTML = `
  <div class="remove"></div>
  <h3>0 <span>00</span></h3>
  <div class="btn">
    <button class="reset">Reset</button>
    <button class="stop">Stop</button>
  </div>`

  let time = 0;
  const intervalId = setInterval(() => {
    time += 1;
    // get time / 100 = 230 = 2s
    let sec = Math.floor(time / 100);
    // get remainder 230 % 100 = 30ms
    let millisec = time % 100;
    const h3 = divTimer.querySelector("h3");
    h3.innerHTML = `${sec} <span>${millisec}</span>`;
  }, 100);


  const resetButton = divTimer.querySelector(".reset");
  const stopButton = divTimer.querySelector(".stop");
  const removeButton = divTimer.querySelector(".remove");
  // reset timer to 0 when clicking "Reset"
  resetButton.addEventListener("click", () => {
    time = 0;
  });
  // remove timer container when click "X"
  removeButton.addEventListener("click", () => {
    divTimer.remove();
  });
  stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
  });
  return divTimer; // return .timers container(parent of .timer)
};

//Add timer's click times
addCounterEl.addEventListener("click", () => {
  const timerContainer = document.querySelectorAll(".timer");
  if (timerContainer.length < 5) {
    // when the 5th timer get erased 6th timer will be added, max amount will stay as 5
    timersCount += 1;
    // if click time is less than 5 create element
    const timer = createTimerEl(timersCount);
    timersContainerEl.appendChild(timer); // append createTimerEl(timersCount) on .timers
    // startTimer(timersCount);// start timer immediately when create new timer container
  }
});


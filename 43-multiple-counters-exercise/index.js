const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");

// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;
let intervalId = null;

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
  return divTimer; // return .timers container(parent of .timer)
};

//Add timer's click times
addCounterEl.addEventListener("click", () => {
  if (timersCount < 5) {
    timersCount += 1;
    // if click time is less than 5 create element
    const timer = createTimerEl(timersCount)
    timersContainerEl.appendChild(timer); // append createTimerEl(timersCount) on .timers
    startTimer(timersCount);
    // resetTimer();
    //   stopTimer(timersCount); 

  } 
});

const startTimer = (number) => {
    const uniqueTimer = document.querySelector(`.timer_${number}`)     
    let time = 0;     
    const h3 = uniqueTimer.querySelector("h3");  
    intervalId = setInterval(() => {
      time += 1;
      // get time / 100 = 230 = 2s
      const sec = Math.floor(time / 100);
      // get remainder 230 % 100 = 30ms
      const millisec = time % 100;  
      h3.innerHTML = `${sec} <span>${millisec}</span>`
    }, 10)          
}

const resetTimer = () => {
    const timerResets = document.querySelectorAll(".reset");
    timerResets.forEach(timerReset => {
        timerReset.addEventListener("click", () => {
            console.log("hi");
        })        
    });
}


// const stopTimer = (number) => {
//     const uniqueTimer = document.querySelector(`.timer_${number}`);
//     console.log(uniqueTimer);
    
//     const timerStop = uniqueTimer.querySelector(".stop");
//     console.log(timerStop);
    

//         timerStop.addEventListener("click", () => {
//             console.log(timerStop);
            
//                 console.log("HI");
                
                
            
            
//             clearInterval(intervalId);
//         })
//     }
 


// document.getElementsByClassName("stop").addEventListener("click",clearInterval(intervalId));

//     const removeButton = document.getElementsByClassName("remove");
//     removeButton.addEventListener("click", () => {
//         // const removeTimer = document.getElementsByClassName("timer");
//         console.log("HI");
//     })

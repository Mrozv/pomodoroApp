// let savedLearningTime = "25:00";
// let savedPauseTime = "05:00";
// let savedAmount = 1;
// let timerInterval;
// let isIntervalRunning = false;
// let pauseFlag = true;
// let maxTime;
// let end;

// // Funkcje
// function toggleSettingsModalVis() {
//   settingsModal.classList.toggle("show");
// }

// function toggleGratsModalVis() {
//   gratsModal.classList.toggle("show");
// }

// function calculateTime(timeValue) {
//   const time = timeValue.split(":");
//   let minutes = parseInt(time[0]);
//   let seconds = parseInt(time[1]);

//   timerInterval = setInterval(() => {
//     if (!end) {
//       seconds--;
//       isIntervalRunning = true;
//       if (seconds < 0) {
//         minutes--;
//         seconds = 59;
//       }
//       timer.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
//         seconds < 10 ? "0" : ""
//       }${seconds}`;
//     }
//     if (minutes === 0 && seconds === 0) {
//       clearInterval(timerInterval);
//       isIntervalRunning = false;
//       savedAmount--;
//       if (pauseFlag) {
//         if (savedAmount > 0) {
//           pauseFlag = false;
//           pauseOn();
//         } else {
//           clearInterval(timerInterval);
//           toggleGratsModalVis();
//           end = true;
//         }
//       } else {
//         pauseFlag = true;
//         pomodoroOn();
//       }
//     }
//   }, 1000);
// }

// function setTimer() {
//   const learningTime = document.querySelector("#learningTime");
//   if (learningTime.value !== "") {
//     const time = `${learningTime.value}:00`;
//     timer.textContent = `${learningTime.value < 10 ? "0" : ""}${
//       learningTime.value
//     }:00`;
//     savedLearningTime = time;
//   }
// }

// function pauseOn() {
//   pomodoroWrapper.classList.remove("pomodoroBg");
//   pomodoroWrapper.classList.add("pauseBg");
//   pauseTitle.textContent = "Pause";
//   pauseTime.value ? (savedPauseTime = `${pauseTime.value}:0`) : "";
//   calculateTime(savedPauseTime);
// }

// function pomodoroOn() {
//   pomodoroWrapper.classList.remove("pauseBg");
//   pomodoroWrapper.classList.add("pomodoroBg");
//   pauseTitle.textContent = "Pomodoro";
//   learningTime.value ? (savedLearningTime = `${learningTime.value}:0`) : "";
//   calculateTime(savedLearningTime);
// }

// function progress() {
//   const pomoTime = savedLearningTime.split(":");
//   const pomoMinutes = parseInt(pomoTime[0]);
//   const pauseTime = savedPauseTime.split(":");
//   const pauseMinutes = parseInt(pauseTime[0]);
//   cycles.value ? (savedAmount = cycles.value) : (savedAmount = 1);
//   maxTime = (savedAmount * pomoMinutes + (savedAmount - 1) * pauseMinutes) * 60;
//   progressBar.setAttribute("max", maxTime);
//   let actualTime = 0;
//   progressInterval = setInterval(() => {
//     maxTime--;
//     actualTime++;
//     progressBar.setAttribute("value", actualTime);
//     if (maxTime === 0) {
//       clearInterval(progressInterval);
//     }
//   }, 1000);
// }

// function restartTimer() {
//   const time = savedLearningTime.split(":");
//   let minutes = parseInt(time[0]);
//   let seconds = parseInt(time[1]);
//   clearInterval(timerInterval);
//   clearInterval(progressInterval);
//   timer.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
//     seconds < 10 ? "0" : ""
//   }${seconds}`;
//   pomodoroWrapper.classList.remove("pomodoroBg");
//   pomodoroWrapper.classList.remove("pauseBg");
//   pauseTitle.textContent = "Pomodoro";
// }

// function restartPomodoro() {
//   progressBar.setAttribute("max", 0);
//   progressBar.setAttribute("value", 0);
//   learningTime.value
//     ? (savedLearningTime = `${learningTime.value}:00`)
//     : (savedLearningTime = "25:00");
//   pauseTime.value
//     ? (savedPauseTime = `${pauseTime.value}:00`)
//     : (savedPauseTime = "05:00");
//   cycles.value ? (savedAmount = cycles.value) : (savedAmount = 1);
//   isIntervalRunning = false;
//   pauseFlag = true;
// }
// // Słuchacze zdarzeń
// settingsBTN.addEventListener("click", () => {
//   if (isIntervalRunning === false) {
//     toggleSettingsModalVis();
//   }
// });

// settingsModalCloseBTN.addEventListener("click", () => {
//   setTimer();
//   toggleSettingsModalVis();
// });

// gratsModalCloseBtn.addEventListener("click", () => {
//   toggleGratsModalVis();
// });

// startBTN.addEventListener("click", () => {
//   if (isIntervalRunning === false) {
//     restartPomodoro();
//     progress();
//     pomodoroOn();
//   }
// });

// restartBTN.addEventListener("click", () => {
//   restartTimer();
//   restartPomodoro();
// });

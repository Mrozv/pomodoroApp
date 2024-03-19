import formatTimeInput from "./ui.js";
import { changeBg } from "./ui.js";
import { overwrittenSettings } from "./settings.js";

const timerDisplay = document.querySelector(".timer");
const endModal = document.querySelector(".end_modal");
const timerTitle = document.querySelector(".title");

let pomodoroEndSound = new Audio("../assets/pomodoroEnd.mp3");
let pauseEndSound = new Audio("../assets/pauseEnd.mp3");
let sessionEndSound = new Audio("../assets/sessionEnd.mp3");

let timer;
let intervalOn = false;
let endFlag = false;
let pomodoroFlag = true;

function startTimer(object, cyclesLeft) {
  let seconds = 0;
  timerDisplay.textContent = formatTimeInput(
    `${overwrittenSettings().pomodoro}:0`
  );
  document.title = formatTimeInput(`${overwrittenSettings().pomodoro}:0`);

  timer = setInterval(() => {
    intervalOn = true;
    if (cyclesLeft > 0) {
      seconds--;
      if (seconds < 0) {
        object--;
        seconds = 59;
      }
      timerDisplay.textContent = formatTimeInput(`${object}:${seconds}`);
      document.title = formatTimeInput(`${object}:${seconds}`);
    }

    if (object === 0 && seconds === 0) {
      cyclesLeft--;
      clearInterval(timer);
      if (cyclesLeft <= 0) {
        endFlag = true;
      }
      if (!endFlag) {
        if (pomodoroFlag) {
          timerTitle.textContent = "Pause"
          pomodoroFlag = false;
          changeBg("#ff7e67");
          pomodoroEndSound.play();
          startTimer(overwrittenSettings().pause, cyclesLeft);
        } else {
          timerTitle.textContent = "Pomodoro"
          pomodoroFlag = true;
          changeBg("#42b883");
          pauseEndSound.play();
          startTimer(overwrittenSettings().pomodoro, cyclesLeft);
        }
      } else {
        timerTitle.textContent = "Pomodoro"
        clearInterval(timer);
        endModal.classList.add("show");
        changeBg("#333");
        intervalOn = false;
        endFlag = false;
        pomodoroFlag = true;
        sessionEndSound.play();
      }
    }
  }, 1000);
}

export default startTimer;
export { timer, intervalOn };
export const changeIntervalFlag = () => (intervalOn = false);
export const changeEndFlag = () => (endFlag = false);
export const changePomodoroFlag = () => (pomodoroFlag = true);

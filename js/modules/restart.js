import formatTimeInput from "./ui.js";
import { changeBg } from "./ui.js";
import { overwrittenSettings } from "./settings.js";
import {
  changeEndFlag,
  changeIntervalFlag,
  changePomodoroFlag,
} from "./timer.js";

let progressRingTimer;
const timerTitle = document.querySelector(".title");
const progressRingElement = document.querySelector(".progressRing");

function displayProgressRing() {
  progressRingElement.setAttribute("role", "progressRing");
  progressRingElement.setAttribute("aria-live", "polite");
  progressRingElement.style.setProperty("--progress", 0);
}

displayProgressRing();

function progressRing() {
  const overallTimeConst =
    (overwrittenSettings().pomodoro * overwrittenSettings().cycles +
      overwrittenSettings().pause * overwrittenSettings().cycles -
      1) *
    60;
  let overallTime = overallTimeConst;

  progressRingTimer = setInterval(() => {
    overallTime--;
    let percentage = (overallTime / overallTimeConst) * 100;
    if (overallTime <= 0) {
      clearInterval(progressRingTimer);
    }
    progressRingElement.setAttribute("aria-valuenow", overallTimeConst);
    progressRingElement.style.setProperty("--progress", percentage + "%");
  }, 1000);
}

async function restart() {
  let object = await import("./timer.js");
  if (object.timer) {
    const timerDisplay = document.querySelector(".timer");

    timerTitle.textContent = "Pomodoro";
    progressRingElement.style.setProperty("--progress", 0);
    clearInterval(object.timer);
    clearInterval(progressRingTimer);
    changeIntervalFlag();
    changeEndFlag();
    changePomodoroFlag();
    timerDisplay.textContent = formatTimeInput(
      `${overwrittenSettings().pomodoro}:0`
    );
    document.title = formatTimeInput(`${overwrittenSettings().pomodoro}:0`);
    changeBg("#333");
  } else {
    console.log("timer is not available");
  }
}

export default restart;
export { progressRing };

import { overwrittenSettings } from "./modules/settings.js";
import { intervalOn } from "./modules/timer.js";
import formatTimeInput from "./modules/ui.js";
import { changeBg } from "./modules/ui.js";
import { progressRing } from "./modules/restart.js";

let startSound = new Audio("../assets/start.mp3");

const startBtn = document.querySelector(".start");
const restartBtn = document.querySelector(".restart");
const settingsBtn = document.querySelector(".settings");
const settingsModal = document.querySelector(".settings_modal");
const closeSettings = document.querySelector("#closeSettings");
const timerDisplay = document.querySelector(".timer");
const closeEndModal = document.querySelector("#closeGrats");

function updateSettings() {
  return overwrittenSettings();
}

startBtn.addEventListener("click", async () => {
  const timerModule = await import("./modules/timer.js");
  if (timerModule.intervalOn === false) {
    changeBg("#42b883");
    progressRing();
    let cyclesLeft = updateSettings().cycles * 2 - 1;
    timerModule.default(updateSettings().pomodoro, cyclesLeft);
    startSound.play();
  }
});

restartBtn.addEventListener("click", async () => {
  const restartModule = await import("./modules/restart.js");
  restartModule.default();
});

settingsBtn.addEventListener("click", async () => {
  const timerModule = await import("./modules/timer.js");
  if (timerModule.intervalOn === false) {
    settingsModal.classList.add("show");
  }
});

closeSettings.addEventListener("click", () => {
  closeSettings.parentElement.classList.remove("show");
  timerDisplay.textContent = formatTimeInput(`${updateSettings().pomodoro}:0`);
});

closeEndModal.addEventListener("click", () => {
  closeEndModal.parentElement.classList.remove("show");
});

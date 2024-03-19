const pomodoroWrapper = document.querySelector(".pomodoro_wrapper");

function formatTimeInput(rawInput) {
  if (typeof rawInput === "string") {
    const [minutes, seconds] = rawInput.split(":");
    const formattedMinutes = minutes.padStart(2, "0");
    const formattedSeconds = seconds ? seconds.padStart(2, "0") : "00";
    return `${formattedMinutes}:${formattedSeconds}`;
  }
}

function changeBg(color) {
  pomodoroWrapper.style.backgroundColor = color;
}

export default formatTimeInput;
export { changeBg };

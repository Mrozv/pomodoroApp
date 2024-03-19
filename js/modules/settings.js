const settings = {
  pomodoro: 1,
  pause: 1,
  cycles: 1,
};

let settingsCopy = { ...settings };

export function overwrittenSettings() {
  const learningTime = document.querySelector("#learningTime");
  const pauseTime = document.querySelector("#pauseTime");
  const cyclesAmount = document.querySelector("#cycle");

  settingsCopy.pomodoro = learningTime.value || settings.pomodoro;
  settingsCopy.pause = pauseTime.value || settings.pause;
  settingsCopy.cycles = cyclesAmount.value || settings.cycles;

  return { ...settingsCopy };
}

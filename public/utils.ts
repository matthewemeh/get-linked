/**  timeMs in milliseconds */
export const breakdownTime = (timeMs: number) => {
  let time = timeMs;

  const hoursToMilliseconds = 3_600_000;
  const minutesToMilliseconds = 60_000;
  const secondsToMilliseconds = 1000;

  const hours: number = Math.floor(time / hoursToMilliseconds);

  time -= hours * hoursToMilliseconds;

  const minutes: number = Math.floor(time / minutesToMilliseconds);

  time -= minutes * minutesToMilliseconds;

  const seconds: number = Math.floor(time / secondsToMilliseconds);

  return { hours, minutes, seconds };
};

export const toggleClass = (el: Element | null, ...classes: string[]) => {
  if (el) classes.forEach(className => el.classList.toggle(className));
};

export const addClass = (el: Element | null, ...classes: string[]) => {
  if (el) classes.forEach(className => el.classList.add(className));
};

export const removeClass = (el: Element | null, ...classes: string[]) => {
  if (el) classes.forEach(className => el.classList.remove(className));
};

export const showAlert = ({
  msg,
  zIndex = '0',
  duration = 4000,
  textColor = '#fff',
  bgColor = '#150e28',
}: AlertProps) => {
  const alert = document.querySelector('#alert') as HTMLElement;

  // show alert only when alert box is initially hidden
  if (alert.style.bottom === '-150px') {
    alert.style.background = bgColor;
    alert.style.color = textColor;
    alert.innerHTML = msg;
    alert.style.bottom = '0px';

    if (zIndex !== '0') alert.style.zIndex = zIndex;

    setTimeout(() => {
      alert.style.bottom = '-150px';
    }, duration);
  }
};

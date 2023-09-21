export const breakdownTime = (timeMs: number) => {
  /**
   * @param {number} time is in milliseconds
   */

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

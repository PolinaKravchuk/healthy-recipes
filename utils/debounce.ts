const debounce = (func: any, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

export default debounce;

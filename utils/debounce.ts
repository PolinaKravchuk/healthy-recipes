const debounce = (func: any, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return function (...args: any) {
    clearTimeout(timeoutId);
    // @ts-ignore
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

export default debounce;

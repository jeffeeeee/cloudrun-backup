export const poll = async function <T>(
  fn: () => Promise<any>,
  fnCondition: (result: T) => boolean,
  ms: number
) {
  let result = await fn();
  while (fnCondition(result)) {
    await wait(ms);
    result = await fn();
  }
  return result as T;
};

export const wait = function (ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

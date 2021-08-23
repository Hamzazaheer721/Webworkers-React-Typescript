/* eslint-disable */
const Loop = (appleCount) => {
  let apple = appleCount;
  for (let i = 0; i <= 999999999; i++) {
    if (i === 999999999) {
      apple += 1;
    }
  }
  return apple;
}

self.onmessage = (e) => {
  const { data } = e;
  const appleCount = Loop(data[0]);
  self.postMessage(appleCount);
}

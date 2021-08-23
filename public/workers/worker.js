/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
const Loop = async (appleCount) => {
  let apple = appleCount;
  for (let i = 0; i <= 999999999; i++) {
    if (i === 999999999) {
      apple += 1;
    }
  }
  return apple;
}

self.onmessage = function asd(e) {
  const { data } = e;
  // let appleCount = data[0];

  const appleCount = await Loop(data[0]);
  console.log(appleCount)
  // for (let i = 0; i <= 999999999; i++) {
  //   if (i === 999999999) {
  //     appleCount += 1;
  //   }
  // }
  console.log('appleCount now ', appleCount)
  self.postMessage(appleCount);
}

// self.addEventListener('message', (e) => {
//   // eslint-disable-next-line no-console
//   console.info(e)
//   const { data } = e;
//   let appleCount = data[0];
//   for (let i = 0; i <= 999999999; i++) {
//     if (i === 999999999) {
//       appleCount++;
//     }
//   }
//   self.postMessage(appleCount, 'apple');
// }, false)

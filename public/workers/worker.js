/* eslint-disable */
const loop = (appleCount) => {
  let apple = appleCount
  for (let i = 0; i <= 999999999; i++) {
    if (i === 999999999) {
      apple += 1
    }
  }
  return apple
}

self.onmessage = (e) => {
  const { data } = e
  if (data.length === 1) {
    const appleCount = loop(data[0])
    self.postMessage(appleCount)
  }
  if (data.length === 2) {
    let _array = []
    let bigData = data[0]
    let value = data[1]
    console.log(value)
    bigData.forEach((_data) => {
      if (
        _data.name.toLowerCase().trim().includes(value.toLowerCase().trim())
      ) {
        _array.push(_data)
      }
    })
    self.postMessage(_array)
  }
}

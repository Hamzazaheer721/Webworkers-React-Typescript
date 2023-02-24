/* eslint-disable */
const loop = (burgerCount) => {
  let burger = burgerCount
  for (let i = 0; i <= 999999999; i++) {}
  burger += 1
  return burger
}

self.onmessage = (e) => {
  const { data } = e
  if (data.length === 1) {
    const burgerCount = loop(data[0])
    self.postMessage(burgerCount)
  }
  if (data.length === 2) {
    let _array = []
    let bigData = data[0]
    let value = data[1]
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

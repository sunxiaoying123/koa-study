

// function getSomething() {
//   return 'someThing'
// }

// async function testAsync () {
//   return 'hello async'
// }

// async function test() {
//   const v1 = await getSomething()
//   const v2 = await testAsync()
//   console.log(v1, v2)
// }
// const result = testAsync()
// console.log(result)

// test()

function takeLongTime() {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve('long_time_value')
    }, 1000)
  })
}

async function test() {
  const v = await takeLongTime()
  console.log(v)
}

test() 
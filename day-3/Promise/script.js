// Resolve example
const promise = new Promise((resolve, reject) => {
  // After timeout ( 1 sec ), promise will return Result text
  setTimeout(() => {
    resolve("Result");
  }, 1000);
})

promise.then((response) => {
  console.log(response)
})


// Reject example
const rejectedPromise = new Promise((resolve, reject) => {
  // After timeout ( 1 sec ), promise will return reject
  setTimeout(() => {
    reject("Error");
  }, 1000);
})

rejectedPromise.then((response) => {
  console.log(response)
}).catch((reject) => {
  console.log(reject)
})


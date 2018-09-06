const util = require('util');
const setImmediatePromise = util.promisify(setImmediate);

setImmediatePromise('foobar').then((value) => {
  // value === 'foobar' (passing values is optional)
  // This is executed after all I/O callbacks.
  console.log(value);
    return value;
});
// or with async function
async function timerExample() {
  console.log('Before I/O callbacks');
  var res = await setImmediatePromise();
  console.log('After I/O callbacks', res);
}
timerExample();
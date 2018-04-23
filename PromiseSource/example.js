

var Promise = require('./index.js');

new Promise(function (resolve, reject) {
  resolve(11)
}).then(function (val) {
  console.log(val)
  return 22
}).then(function (val) {
  console.log(val)
  return 33
}).then(

).then(

).then(function (val) {
  console.log(val)
}).catch(function (error) {
  console.log(error)
})
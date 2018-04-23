let createStore = require('./lib/createStore.js');
let combineReducers = require('./lib/combineReducers.js');
let applyMiddleware = require('./lib/applyMiddleware.js');
let bindActionCreators = require('./lib/bindActionCreators.js');
let compose = require('./lib/compose.js');

module.exports = {
  createStore(reducer, [preloadedState], [enhancer]),
  combineReducers(reducers),
  applyMiddleware(...middlewares),
  bindActionCreators(actionCreators, dispatch),
  compose(...functions),
}
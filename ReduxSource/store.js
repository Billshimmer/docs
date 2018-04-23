function checkInstance(vars, targetIntance) {
  return vars instanceof targetIntance;
}

function store() {
  this.state = {};
  this.reducers = {};
  this.handlers = [];
}

store.prototype.getState = function () {
  return this.state;
}

/**
 *
 * @param {*} action
 */
store.prototype.dispatch = function (action) {
  for (key in this.reducers) {
    let reducer = this.reducers[key];
    let stateWithKey = this.state[key];
    if (!checkInstance(reducer, Function)) {
      throw new Error("can't find the target reducer which can execute")
    }
    stateWithKey = reducer(action);
  }
}

store.prototype.subscribe = function (listener) {
  if (!checkInstance(listener, Function)) {
    return;
  } else {
    this.handlers.push(listener);
    let unsubscribe = function () {
      let offset = this.handlers.indexOf(listener);
      this.handlers.splice(offset, 1);
    }
    return unsubscribe;
  }
}

store.prototype.unsubscribe = function (listener) {
  if (!checkInstance(listener, Function)) {
    return;
  }
  let offset = this.handlers.indexOf(listener);
  if (offset === -1) {
    return;
  }
  this.handlers.splice(offset, 1);
}

store.prototype.replaceReducer = function (nextReducer) {

}

module.exports = store
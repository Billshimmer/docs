function checkInstance(vars, targetIntance) {
  return vars instanceof targetIntance;
}

function Store() {
  this.state = {};
  this.reducers = {};
  this.handlers = [];
}

Store.prototype.getState = function () {
  return this.state;
}

/**
 *
 * @param {*} action
 */
Store.prototype.dispatch = function (action) {
  for (key in this.reducers) {
    let reducer = this.reducers[key];
    let stateWithKey = this.state[key];
    if (!checkInstance(reducer, Function)) {
      throw new Error("can't find the target reducer which can execute")
    }
    stateWithKey = reducer(action);
  }
}

Store.prototype.subscribe = function (listener) {
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

Store.prototype.unsubscribe = function (listener) {
  if (!checkInstance(listener, Function)) {
    return;
  }
  let offset = this.handlers.indexOf(listener);
  if (offset === -1) {
    return;
  }
  this.handlers.splice(offset, 1);
}

Store.prototype.replaceReducer = function (nextReducer) {

}

module.exports = Store
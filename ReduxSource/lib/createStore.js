
/**
 *
 * @param {*} reducer 注入reducer函数, 接受state和action两个参数
 * @param {*} preloadedState 加载之前的默认store状态树
 * @param {*} enhancer 组合 store creator 的高阶函数
 */
function createStore(reducer, initedState, enhancer) {
  var curReducer = reducer;
  var state = initedState;
  var listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    try {
      curReducer(state, action);
    } catch(error) {
      throw new Error('dispatch action get some errors!');
    }
  }

  function subscribe(listener) {
    this.listeners.push(listener);
    return function unSubscribe() {
      let offset = this.listeners.indexOf(listener);
      if ( offset !== -1) {
        this.listeners.splice(listener, 1);
      }
    }
  }

  function replaceReducers(nextReducer) {
    curReducer = nextReducer;
  }

  return {
    getState,
    dispatch,
    subscribe,
    replaceReducers
  }
}

module.exports = createStore
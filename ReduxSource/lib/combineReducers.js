
const ACTION = {
  INIT_ALL: 'init_all'
};
/**
 *
 * @param {*} reducers 所有的reducers注册
 */
function combineReducers(reducers) {
  var finalReducers = {};
  var maybeError = undefined;
  var keys = Object.keys(reducers);
  for (var i = 0; i < keys.length; i++) {
    var key = reducers[keys[i]];
    if (reducers[key] instanceof Function) {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducersKeys = Object.keys(finalReducers)
  // 避免reducer出错
  try {
    checkVaildForReducers(finalReducers);
  } catch (e) {
    maybeError = e;
  }

  return function combination(state = {}, action) {
    if (maybeError) {
      throw maybeError;
    }

    var changed = false;
    var nextState = {};

    for (var j = 0; j < finalReducersKeys.length; j++) {
      var curKey = finalReducersKeys[j];
      var reducer = finalReducers[curKey];
      // reducer和state的key同名
      var preStateWithKey = state[curKey];
      var nextStateWithKey = reducer(preStateWithKey, action);

      if (typeof nextState === 'undefined') {
        throw new Error(`${curKey} reducer return undefined!`);
      }

      nextState[key] = nextStateWithKey;
      changed = changed || preStateWithKey === nextStateWithKey;
    }

    return changed ? nextState : state;
  }


  function checkVaildForReducers(reducers) {
    finalReducersKeys.forEach(key => {
      if (reducers[key] instanceof Function) {
        var State = reducers[key](undefined, { type: ACTION.INIT_ALL });
        if (State === undefined) {
          throw new Error(`reducer for this ${key} return undefined, you should check it`)
        }
      }
    })
  }
}

module.exports = combineReducers
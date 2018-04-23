
/*
  Promise 状态概念
  初始状态为: pending
  状态只能转移一次: pending => rejected or pending => resolved
*/


var Promise = function (executor) {
  let self = this;
  self.data = undefined;
  self.status = 'pending';
  self.onResolvedCallbacks = [];
  self.onRejectedCallbacks = [];

  // 构造函数直接执行传入的executor函数
  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }

  // 转移状态并执行所有的Resolved
  function resolve(data) {
    if (self.status === 'pending') {
      self.status = 'resolved';
      self.data = data;

      for (var i = 0; i < self.onResolvedCallbacks.length; i++) {
        var cb = self.onResolvedCallbacks[i];
        setTimeout(cb, 0);
      }
    }
  }

  // 转移状态并执行所有的Rejected
  function reject(error) {
    if (self.status === 'pending') {
      self.status = 'rejected';
      self.data = error;

      for (var i = 0; i < self.onRejectedCallbacks.length; i++) {
        var cb = self.onRejectedCallbacks[i];
        setTimeout(cb, 0);
      }
    }
  }
}

Promise.prototype.then = function (resolveFunc, rejectFunc) {
  var self = this;
  var rsF = resolveFunc instanceof Function ? resolveFunc : function ( val ) { return val };
  var rjF = rejectFunc instanceof Function ? rejectFunc : function (  ) { }

  var curStatus = self.status;


  // 三种状态下分开处理
  if (curStatus === 'pending') {
    return new Promise(function (resolve, reject) {
      self.onResolvedCallbacks.push(function (value) {
        try {
          var x = rsF(self.data);
          if (x instanceof Promise) {
            x.then(resolve, reject);
          }
        } catch (e) {
          reject(e);
        }
      });

      self.onRejectedCallbacks.push(function (error) {
        try {
          var x = rjF(self.data);
          if (x instanceof Promise) {
            x.then(resolve, reject);
          }
        } catch (e) {
          reject(e);
        }
      });
    })
  }

  if (curStatus === 'resolved') {
    try {
      return new Promise(function (resolve, reject) {
        var x = rsF(self.data);
        // 如果返回的是Promise对象,直接处理
        if (x instanceof Promise) {
          x.then(resolve, reject);
        }
        resolve(x);
      })
    } catch (error) {
    }
  }

  if (curStatus === 'rejected') {
    try {
      return new Promise(function (resolve, reject) {
        var x = rjF(self.data);
        // 如果返回的是Promise对象,直接处理, 区别在于不再向下传递
        if (x instanceof Promise) {
          x.then(resolve, reject);
        }
      })
    } catch (error) {
    }
  }
}


Promise.prototype.catch = function (cb) {
  let self = this;
  self.then(null, cb)
}

module.exports = Promise;

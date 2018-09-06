const Timer = process.binding('timer_wrap').Timer;
const kOnTimeout = Timer.kOnTimeout | 0;

var mySetTimeout = function (fn, ms) {
    var timer = new Timer();
    timer.start(ms, 0);
    timer[kOnTimeout] = fn;
    return timer
}

var myClearTimeout = function (timer) {
    if (timer && timer.close) {
        timer.close();
    }
}

mySetTimeout(function () {
    console.log('timeout!')
}, 1000)

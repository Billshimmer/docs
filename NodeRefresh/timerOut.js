var a = function () {
    console.log(1)
    setTimeout(a, 0)
}
a();


const log = console.log
function* gen(){
    yield 10
    if (false) yield 20
    yield 30
    return 90
    yield 30
}

const [Heap, CallStack] = [{}, []]; // javascript runtime : Heap(memory allocation) / Call Stack(function call) -> if ? -> webApi

const webApis = []; // browser provided, (Dom events, httpRequest, Timers(setTimeout)) -> Callback queue

const callbackQueue = []; // Dom Queue, networkQueue, TimerQueue -> EventLoop -> Call Stack;

// httos://latentflip.com/loupe 애니메이션으로 확인해볼 수 있는 사이트

/* 자바스크립트에서 함수를 호출하면 콜스택에 쌓이고 공간에 쌓인다. I/O bound 작업 및 Timers의 경우 web APIs의 백그라운드 공간에 
쌓여 실행되고 콜백 큐에 완료된 순서대로 쌓여서 이벤트 루프를 거쳐 다시 콜스택 공간으로 올라가 실행되는 것*/


console.log("Hi");
setTimeout(() => {
    console.log('async fuction 1 complete');
}, 5000);
setTimeout(() => {
    console.log('async function2 complete');
}, 5000);

console.log("Time out first?");

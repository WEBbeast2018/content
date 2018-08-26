console.log('main script: start')
if (window.Worker) {
    const myWorker = new Worker('worker.js');

    // define response
    myWorker.onmessage = function(msg) {
        const result = msg.data;
        console.log('main script: Result from worker -  ' + result );
    };

    myWorker.postMessage([1948, 2000]);
}
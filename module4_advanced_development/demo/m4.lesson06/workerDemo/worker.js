onmessage = (msg) => {
    console.log('worker script: onmessage' );
    const workerResult = someWork(msg.data);
    postMessage(workerResult );
};

const someWork = (data) => {
    // do whatever
    console.log('worker script: someWork' );
    return data[0] * data[1] * 42;
};
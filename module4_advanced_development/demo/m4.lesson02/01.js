function nextCallBack(data) {
    console.log(data);
}

function errorCallBack(err) {
    console.error(err);
}

function completeCallBack() {
    console.log('done');
}

function giveMeSomeData(nextCB, errorCB, completeCB) {
    // this can contain http requests, clicks etc...
    [10, 20, 30].forEach(nextCB);
    completeCB();
}

// give me data and deliver the results to these functions
giveMeSomeData(
    nextCallBack,
    errorCallBack,
    completeCallBack
);
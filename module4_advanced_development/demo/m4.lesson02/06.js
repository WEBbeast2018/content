const observer = {
    // same functions
    next:  data => console.log(data),
    error:  err => console.error(err),
    complete:  () => console.log('done')
};

// let's add  map function!
function map(transformFn){
    const inputObservable = this;
    const outputObservable = createObservable(function subscribe(outputObserver) {
        inputObservable.subscribe({
            next: function (x) {
                const y  = transformFn(x);
                outputObserver.next(y);
            },
            error: e => outputObserver.error(e),
            complete: () => outputObserver.complete()
        })
    });
    return outputObservable;
}

function createObservable(subscribe) {
    return {
        subscribe: subscribe,
        // let's add  map function!
        map: map
    };
}
// use factory here!
const observable = createObservable(ob => {
    [10, 20, 30].forEach(ob.next);
    ob.complete();
});

// same old observable
observable
    .map(x => x/10)
    .subscribe(observer);

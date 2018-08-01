// mission: add filter functionality
// extra mission: add delay functionality

const observer = {
    // same functions
    next:  data => console.log(data),
    error:  err => console.error(err),
    complete:  () => console.log('done')
};
// improved map function
function map(transformFn){
    return createObservable(outputObserver =>{
        this.subscribe({
            next: function (x) {
                const y  = transformFn(x);
                outputObserver.next(y);
            },
            error: e => outputObserver.error(e),
            complete: () => outputObserver.complete()
        })
    });
}

function filter(conditionFn) {
    // ...
}

function createObservable(subscribe) {
    return {
        subscribe: subscribe,
        map: map,
        // filter: filter
    };
}

const observable = createObservable(ob => {
    [10, 20, 30].forEach(ob.next);
    ob.complete();
});

// same old observable
observable
    .map(x => x/10)
    // add filter functionality
    .filter(x => x != 2)
    .subscribe(observer);

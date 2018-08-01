const observer = {
    // same functions
    next:  data => console.log(data),
    error:  err => console.error(err),
    complete:  () => console.log('done')
};

// let's create a factory function
function createObservable(subscribe) {
    return {
        subscribe: subscribe
    };
}
// use factory here!
const observable = createObservable(ob => {
    [10, 20, 30].forEach(ob.next);
    ob.complete();
});

// same old observable
observable.subscribe(observer);
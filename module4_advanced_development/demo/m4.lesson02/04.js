const observer = {
    // same functions
    next: function nextCallBack(data) {
        console.log(data);
    },
    error: function errorCallBack(err) {
        console.error(err);
    },
    complete: function completeCallBack() {
        console.log('done');
    }
};

const observable = {
    subscribe: function subscribe(ob) {
        // this can contain http requests, clicks etc...
        [10, 20, 30].forEach(ob.next);
        ob.complete();
    }
};

// Hmm.. observer is observing something... ah! the observable!
observable.subscribe(observer);
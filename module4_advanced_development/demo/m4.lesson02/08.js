// mission: add filter functionality
// extra mission: add delay functionality

const observer = {
  // same functions
  next: data => console.log(data),
  error: err => console.error(err),
  complete: () => console.log('done')
};

// improved map function
function map(transformFn) {
  return createObservable(outputObserver => {
    return this.subscribe({
      next: (x) => outputObserver.next(transformFn(x)),
      error: e => outputObserver.error(e),
      complete: () => outputObserver.complete()
    })
  });
}

function filter(conditionFn) {
  return createObservable(outputObserver => {
    this.subscribe({
      next: (x) => conditionFn(x) ? outputObserver.next(x) : undefined,
      error: e => outputObserver.error(e),
      complete: () => outputObserver.complete()
    })
  });
}

function createObservable(subscribe) {
  return {
    subscribe: subscribe,
    map: map,
    filter: filter
  };
}

const observable = createObservable(ob => {
  [10, 20, 30].forEach(ob.next);
  ob.complete();
});

// same old observable
observable
  .map(x => x / 10)
  // add filter functionality
  .filter(x => x != 2)
  .subscribe(observer);

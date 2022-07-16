/* lattening Operator
The overall goal of a flattening operator is to subscribe to inner observables.
Their values will get pushed onto the next operator.
They are much easier to use than chaining subscriber functions. */

import {
  fromEvent,
  interval,
  map,
  merge,
  mergeMap,
  Opservable,
  take,
  tap,
  switchMap,
  concatMap,
  exhaustMap,
} from "rxjs";
import { ajax } from "rxjs/ajax";

const button = document.querySelector("#btn");

// const opservable = fromEvent(button, "click").pipe(
//   mergeMap(() => {
//     return ajax.getJSON("https://jsonplaceholder.typicode.com/todos/1");
//   })
// );

const opservable1 = fromEvent(button, "click").pipe(
  mergeMap(() => {
    return interval(1000).pipe(take(5), tap(console.log)); // The outer observable never completes, but the inner observable does
  })
);

const opservable2 = fromEvent(button, "click").pipe(
  exhaustMap(() => {
    return interval(1000).pipe(
      take(5),
      tap({ complete: () => console.log("inner opservable completed") })
    );
  })
);

const subscribtion = opservable2.subscribe({
  next: (value) => {
    console.log(value);
  },

  complete: () => console.log("completed"),
});

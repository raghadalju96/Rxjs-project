//Pushing Asynchronous Values
//Unsubscribing from Observables

import { Observable } from "rxjs";

const opservable = new Observable((subscriber) => {
  const id = setInterval(() => {
    subscriber.next("test");
    console.log("leak");
  }, 1000);
  //  subscriber.complete() // good practice to complete the opservable

  return () => {
    clearInterval(id);
  };
});

const subscribtion = opservable.subscribe({
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log("completed");
  },
});

setTimeout(() => {
  subscribtion.unsubscribe();
}, 4000); //If an observer doesn't need to listen to data from an observable anymore, we should unsubscribe from

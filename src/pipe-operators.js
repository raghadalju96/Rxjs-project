import {
  Opservable,
  of,
  map,
  fromEvent,
  pluck,
  filter,
  reduce,
  take,
  scan,
  tap,
} from "rxjs";

const observable = fromEvent(document, "keydown");
const observable2 = of(1, 2, 3, 4, 5);

const newValues = observable.pipe(map((value) => `$${value}`));

const newValues1 = observable.pipe(map((value) => value.code));

const newValues2 = observable.pipe(pluck("code"));

const newValues3 = observable.pipe(
  pluck("code"),
  filter((code) => code === "Space") //The operator will pass on the value received from the previous operator.
);

const newValues4 = observable.pipe(
  map((event) => (event.code === "Space" ? event.code : null))
); //Condensing our entire logic into a single operator makes this task almost impossible and it is inadvisable

const newValues5 = observable2.pipe(
  reduce((acc, val) => acc + val, 0) // 15
);

const newValues6 = observable2.pipe(
  take(3),
  tap(console.log),
  reduce((acc, val) => acc + val, 0) //6
);

const newValues7 = observable2.pipe(
  take(3),
  scan((acc, val) => acc + val, 0) // 1 3 6
);

const subscribtion = newValues6.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("completed"),
});

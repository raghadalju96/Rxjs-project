

import { fromEvent, interval, of, timer,from } from "rxjs";

//https://jsonplaceholder.typicode.com/todos/1

//const opservable = interval(1000)

//const opservable = timer(0,1000)

//const opservable = fromEvent(document, 'click')

//const opservable = of([1,2,3,4,5]) // [1,2,3,4,5]
//const opservable = from([1,3,4,5,6]) // 1,3,4,5,6



/* the form operator can work with complex types,We can pass 
 in arrays, objects, promises and intervals */
const opservable = from(fetch('https://jsonplaceholder.typicode.com/todos/1'))

//const subscribtion = opservable.subscribe(console.log)

const subscribtion = opservable.subscribe({
    next:(value) => {console.log(value)},
    complete: () => {console.log('completed');}
})

console.log('hello');
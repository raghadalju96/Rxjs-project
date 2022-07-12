

import { Observable } from 'rxjs'


// this is observable 
const observable = new Observable((subscriber) =>{
    subscriber.next('Hello world')
    subscriber.error('Error!')
    subscriber.next('test')

    subscriber.complete()
    subscriber.next('after completion')
})



// this is opserver 
observable.subscribe({
    next: (value) => console.log(value),
    error: (err) => console.error(err),
    complete : () => console.log('complete')
})





//Pushing Asynchronous Values



import {Observable} from 'rxjs'



const opservable = new Observable((subscriber) => {

   const id = setInterval(()=> { subscriber.next('test')
    console.log('leak')
    ,1000})
    subscriber.complete()
    
    clearInterval(id)
     


});

console.log('before');
opservable.subscribe({
   next: (value) => {console.log(value);},
   complete:() => {console.log("completed");}
})
console.log('after');
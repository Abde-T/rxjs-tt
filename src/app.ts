import { Observable } from "rxjs";

//* let observable$ = new Observable((subscriber)=>{
//*     subscriber.next('hello');
//*     subscriber.error()
//*     subscriber.complete()
//* })

//* let observer = {
//*     next: (value:any) => {
//*         console.log(value)
//*     },
//*     complete:()=>{
//*         console.log('completed')
//*     },
//*     error:(err: any)=>{
//*         console.log('broken')
//*     }
//* }

//* observable$.subscribe(observer)

import { of } from "rxjs";

//!  of('hello', 'world').subscribe({
//!      next: value => console.log(value),
// !     error: err => console.log(err),
// !     complete: () => console.log('completed')
// ! })

// ! function handmadeOf(...args: any){
// !     return new Observable(subscriber =>{
// !         for(let i=0; i<args.length; i++){
// !             subscriber.next(args[i]);
// !         }
//!          subscriber.complete()
// !     })
//!  }

//!  handmadeOf('hello', 'world', ':').subscribe(value=>console.log(value))

import { from } from "rxjs";

//& from(['hell', 'world']).subscribe({
//&     next: (value) => console.log(value),
//&     complete: () => console.log('completed '),
//&     error: err => console.log(err) 
//& });

//& const promise = new Promise((resolve, reject) =>{
//&     resolve('resolve');
//& })

//& console.log(promise)

//& const observablePromise$ = from(promise).subscribe({
//&     next: (value) => console.log(value),
//&     complete: () => console.log('completed '),
//&     error: (error) => console.log(`Error ${error}`)
//& })

import { pipe, map, filter } from "rxjs";

//~ const observable$ = from([1,2,3,4,5,6,7])
//~     .pipe(
// ~        filter(num => num % 2 === 0), 
//~         map(num => num * 2)
// ~    );

//~ observable$.subscribe({
//~     next:(value)=>console.log(value),
//~ });

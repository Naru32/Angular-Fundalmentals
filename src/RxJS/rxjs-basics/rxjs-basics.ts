import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter, from, interval, map, Observable, of, take, tap, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs-basics',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs-basics.html',
  styleUrl: './rxjs-basics.css',
})
export class RxjsBasics {

  data = 3
  data2 = 3

  arr = [1,3,45,32,6]
  arr2 = [1,33,4,3,6]

  search = new FormControl()

  // basic Rxjs operator

  

  // basic way of creating observable

  constructor(){

    // way of creating observable
    const obs1$ = new Observable((observer)=>{
    observer.next(3)
    observer.next(4)
    observer.next(1)

    if(this.data != this.data2){
      observer.error('Not matching')
    }
   
    observer.complete()
    })


    obs1$.subscribe({

      next(values){
        console.log(values);
      },

      complete() {
        console.log('done');
      },

      error(e){
        console.log(e);
      }

    })

    // let data$ = of(this.arr,this.arr2)

    // let dataFrom$ = from(this.arr)

    // let interval$ = interval(2000).pipe(take(5))

    // let timer$ = timer(2000)

    // data$.subscribe((val)=>{
    //   console.log(val);    
    // })

    // dataFrom$.subscribe((val)=>{
    //   console.log('From obs', val);
    // })

    // interval$.subscribe((val)=>{
    //   console.log('interval', val);
    // })
    
    // timer$.subscribe((val)=>{
    //   console.log('timer', val);
    // })

    let arr$ = from(this.arr)

    // map operator

    arr$.pipe(
      map((val)=>{
        return val * 2
      }) 
    ).subscribe((res)=>{
      console.log(res)
    })

    // filter

    arr$.pipe(
      filter((val)=>{
        return val % 2 == 0
      })
    ).subscribe((res)=>{
      console.log('Filtered',res)
    })

    // tap
    
    arr$.pipe(
      tap((val)=> val)
    ).subscribe((res)=>{
      console.log("tap operator", res)
    })

  }
}




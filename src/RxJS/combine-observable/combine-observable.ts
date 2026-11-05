import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { concatMap, debounceTime, exhaustMap, forkJoin, mergeMap, of, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-combine-observable',
  imports: [ReactiveFormsModule],
  templateUrl: './combine-observable.html',
  styleUrl: './combine-observable.css',
})
export class CombineObservable {

  http = inject(HttpClient)

  arr$ = of([10,30,4,6,23])
  arr2$ = of([11,3,44,66,22])

  search = new FormControl()  

  sub$ : Subject<void> = new Subject()



  constructor(){
    // forkJoin() : can handle multiple observable together and runs subscribe callback when all observable succeeds else error

    // forkJoin([this.arr$,this.arr2$]).subscribe((res)=>{
    //   console.log("forkJoin",res)
    // })

    // const users$ = this.http.get('https://jsonplaceholder.typicode.com/users')

    // const posts$ = this.http.get('https://jsonplaceholder.typicode.com/posts')

    // forkJoin([users$,posts$]).subscribe((res)=>{
    //   console.log('Fork join', res);
    // })   

  console.log(this.search);

  // switchMap : cancels previous request

  this.search.valueChanges.pipe(
    debounceTime(500)
    // switchMap((searchTerm)=> this.http.get(`https://dummyjson.com/products/search?q=${searchTerm}`))
  ).subscribe((res)=>{
     this.http.get(`https://dummyjson.com/products/search?q=${res}`).subscribe((result)=>{
      console.log(result)
     })
    // console.log(res);
  })

  // MergeMap : allows multiple api calls together doesnt cancels anything

  this.search.valueChanges.pipe(
    debounceTime(500),
    mergeMap((searchTerm)=> this.http.get(`https://dummyjson.com/products/search?q=${searchTerm}`))
  ).subscribe((res)=>{
    console.log(res);
  })

  // ConcatMap : it doesnt cancel the obseravable but allows execute sequentially one by one

    this.search.valueChanges.pipe(
    debounceTime(500),
    concatMap((searchTerm)=> this.http.get(`https://dummyjson.com/products/search?q=${searchTerm}`))
  ).subscribe((res)=>{
    console.log(res);
  })

  // exhaustMap : Restricts new observable until current observable finishes the execution

  this.sub$.pipe(
    exhaustMap(()=> this.http.get('https://jsonplaceholder.typicode.com/users')
  )
  ).subscribe(res=> console.log(res)
  )

  }

  onLogin(){
    console.log('Loggedin')
  }

  onExhaust(){
    this.sub$.next()
  }

}

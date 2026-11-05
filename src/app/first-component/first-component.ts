import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Appstore } from '../store/counter.reducer';
import { AsyncPipe } from '@angular/common';
import { inc } from '../store/counter.action';

@Component({
  selector: 'app-first-component',
  imports: [AsyncPipe],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent {

  router = inject(Router) // 2nd step

   students : any[] = [
    {stId : 1, name:'Naru',age:23, isActive:true, gender:'male'},
    {stId : 2, name:'Sharu',age:24, isActive:false,gender:'female'},
    {stId : 3, name:'Aj',age:33, isActive:false,gender:'female'},
    {stId : 4, name:'Rahul',age:33, isActive:true,gender:'male'}
  ] // 1st step

  // 3rd creat fn
  viewUser(id : number){
    this.router.navigate(['user',id]) // 5th step
  }

  // step 4: show data on ui select state from store using select()
 
 count$ : Observable<number> = new Observable<number> // because store produces observable

  constructor(private store : Store<Appstore>){
    this.count$ = store.select('count')
  }
 // step 5: dispatch action
  onInc(){
    this.store.dispatch(inc())
  }
}

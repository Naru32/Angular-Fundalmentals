import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-sub-beh-replay',
  imports: [],
  templateUrl: './sub-beh-replay.html',
  styleUrl: './sub-beh-replay.css',
})
export class SubBehReplay implements OnInit {

sub$ : Subject<number> = new Subject()
beh$ : BehaviorSubject<number> = new BehaviorSubject(0)
rep$ = new ReplaySubject(2)



  constructor(){
    debugger;
    // setTimeout(()=>{
    // this.sub$.next(1)
    // this.sub$.next(2)
    // },3000)

    // setTimeout(()=>{
    // this.beh$.next(1)
    // this.beh$.next(2)
    // },3000)

    this.rep$.next(1)
    this.rep$.next(2)
    this.rep$.next(3)

  }


  ngOnInit(): void {
    debugger;
    this.rep$.subscribe((res)=>{
        console.log(res);
      })  
  } 
}

import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {

  constructor(){
    effect(
      ()=>{
        console.log('changed:', this.count());
        console.log('item count', this.itemCount()); 
      }
    )
  }

  user = signal('Narendra')
  count = signal(0)


  changeUser(){
    this.user.set('Sowmya')
  }

  inc(){
    this.count.update(value=> value + 1)
  }

  itemCount = signal<number>(10)
  price = signal<number>(420)
  // computed signal
  total = computed(()=> this.itemCount() * this.price())

  addItem(){
    this.itemCount.update(val=> val + 1)
  }
  
  removeItem(){
    this.itemCount.update(val=> val - 1)
  }

}


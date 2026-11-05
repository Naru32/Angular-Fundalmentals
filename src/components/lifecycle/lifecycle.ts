import { Component,OnInit,OnChanges, Input, input, SimpleChanges, signal, DoCheck, OnDestroy} from '@angular/core';
import { Card } from '../../Reusable/card/card';

@Component({
  selector: 'app-lifecycle',
  imports: [Card],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle implements DoCheck,OnDestroy {

   name = signal('Narendra');
  count = 0
  constructor(){
    console.log('1. Constructor runs')
  }

  inc(){
    this.count = this.count + 1
  }

ngDoCheck(): void {
  console.log('checks')
}

emp = {
  name : 'Narendra',
  age:24,
  gender:'Male',
  companyName :'TY'
}

  onClick(){
    this.name.update(val=> val = 'Dhanush')
  }

  ngOnDestroy(): void {
    console.log('Component removed');
  }

}

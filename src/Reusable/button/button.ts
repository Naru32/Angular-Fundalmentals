import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

  // step 1 : 
  @Input() btnText = '';
  @Input() btnCss = '';

//   @Output() triggerSubmit = new EventEmitter()
//  @Output()  triggerEdit = new EventEmitter()

@Output() trigger = new EventEmitter()

onClick(){  
    this.trigger.emit()
  }

}

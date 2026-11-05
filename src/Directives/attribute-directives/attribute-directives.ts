import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Highlight } from "../highlight";


@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule, Highlight],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.css',
})
export class AttributeDirectives {
    bgColor = '';

    isAdmin = false

    changeToAdmin(){
      this.isAdmin = true
    }

    addColor(){
      this.bgColor = 'bg-pink-300'
    }

  changeColor(color : string){
    this.bgColor = color
  }

  css = {
     'color' : 'white',
    'background-color' : 'Violet',
    'width' : '200px',
    'height' : '200px',
    'border-radius' : '50%',
    'text-align' : 'center'
  }
}

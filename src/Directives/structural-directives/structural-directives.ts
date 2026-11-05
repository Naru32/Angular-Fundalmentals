import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from "../highlight";


@Component({
  selector: 'app-structural-directives',
  imports: [CommonModule, FormsModule, Highlight],
  templateUrl: './structural-directives.html',
  styleUrl: './structural-directives.css',
})
export class StructuralDirectives {

  role = '' 

  constructor(){
    console.log('role', this.role);
  }

  isDiv1Visible : boolean = true;

  isDiv2Visible : boolean = true;

  cities = ['Maharashtra','Gujarat','Karnataka','WB','Andhra pradesh','Tamilnadu']

  div1Show(){
    this.isDiv1Visible = true;
  }

  div1Hide(){
    this.isDiv1Visible = false;
  }

  toggle(){
    this.isDiv2Visible = !this.isDiv2Visible
  }

  
}


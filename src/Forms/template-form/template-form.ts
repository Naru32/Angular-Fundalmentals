import { JsonPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from "../../Reusable/button/button";

@Component({
  selector: 'template-form',
  imports: [FormsModule, JsonPipe, Button, NgClass],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {

  userData = {
    Fname : '',
    Lname:'',
    age:'',
    city:'',
    state:''
  }

  text = [
    {
      name : 'a'
  },
  {
    name : 'b'
  }
  ]

  onSubmit(){
    console.log('clicked');
  }

  onEdit(text : unknown){
    console.log('Editing',text);
  } 

}

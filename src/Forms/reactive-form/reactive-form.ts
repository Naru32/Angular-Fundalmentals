import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {

  // 1st step: create Model to record form data
  FormData = new FormGroup({
    Fname : new FormControl('',[Validators.required,Validators.minLength(3)]),
    Lname : new FormControl(''),
    age : new FormControl(''),
    city : new FormControl(''),
    State : new FormControl('')
  })

  onSubmit(){
    console.log(this.FormData.value);
  }

  // onEdit(){
  //     this.FormData.setValue({
  //       Fname:'Dhanush',
  //       Lname:'V E',
  //       age:'23',
  //       city:'Tirupati',
  //       State:'Andhra Pradesh'
  //     })
  // }

  onEdit(){
      this.FormData.patchValue({
        Fname:'Dhanush',
        age:'23',
        city:'Tirupati',
        State:'Andhra Pradesh'
      })
  }
}

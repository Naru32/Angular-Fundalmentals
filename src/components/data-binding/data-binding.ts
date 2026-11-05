import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from "../../Reusable/button/button";

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, Button],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  user = 'Sowmyadeep Mukherjee'
  display = ''
  url = 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_640.jpg'

  changeUser(){
    this.user = 'Sundaravadhani'
  }

  Change(e : Event){
    console.log(e);
  }

}

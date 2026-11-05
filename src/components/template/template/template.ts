import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template',
  imports: [CommonModule],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {
  userName = 'Sowmyadeep'
  isLoggedIn = true

  @ViewChild('View') temp1 : TemplateRef<any> | undefined
  constructor(){
    console.log(this.temp1);
  }

  @ViewChild('container',{read:ViewContainerRef}) 
  viewContainer : ViewContainerRef | undefined

  onClick(){
    if(this.temp1){
      this.viewContainer?.createEmbeddedView(this.temp1)
    }
  }

}

import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FirstComponent } from './first-component/first-component';
import { SecondComponent } from './second-component/second-component';
import { DataBinding } from '../components/data-binding/data-binding';
import { Signals } from '../components/signals/signals';
import { StructuralDirectives } from '../Directives/structural-directives/structural-directives';
import { AttributeDirectives } from '../Directives/attribute-directives/attribute-directives';
import { Pipes } from '../Pipes/pipes/pipes';
import { TemplateForm } from "../Forms/template-form/template-form";
import { ReactiveForm } from "../Forms/reactive-form/reactive-form";
import { FormsModule } from '@angular/forms';
import { Students } from './service/students';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent, SecondComponent, StructuralDirectives, AttributeDirectives, Pipes, TemplateForm, ReactiveForm, RouterLink, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Narendra Mahalle');

  role:string = ''

  constructor(private studentSrv : Students){}

  userChange(role : any){
    debugger;
      console.log(role);
    this.studentSrv.onRoleChanges$.next(role)
    this.studentSrv.roleBeh$.next(role)
  }
}

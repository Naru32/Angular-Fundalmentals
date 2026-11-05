import { Routes } from '@angular/router';
import { DataBinding } from '../components/data-binding/data-binding';
import { FirstComponent } from './first-component/first-component';
import { Signals } from '../components/signals/signals';
import { SelectForm } from '../components/select-form/select-form';
import { TemplateForm } from '../Forms/template-form/template-form';
import { ReactiveForm } from '../Forms/reactive-form/reactive-form';
import { User } from '../components/user/user';
import { SecondComponent } from './second-component/second-component';
import { GetApi } from '../api-integration/get-api/get-api';
import { PostApi } from '../api-integration/post-api/post-api';
import { Lifecycle } from '../components/lifecycle/lifecycle';
import { Template } from '../components/template/template/template';
import { Login } from '../components/login/login';
import { authGuard } from '../guards/auth-guard';
import { deactivateGuard } from '../guards/deactivate-guard';
import { RxjsBasics } from '../RxJS/rxjs-basics/rxjs-basics';
import { Pipes } from '../Pipes/pipes/pipes';
import { SubBehReplay } from '../RxJS/sub-beh-replay/sub-beh-replay';
import { CombineObservable } from '../RxJS/combine-observable/combine-observable';

export const routes: Routes = [

    {
        path:'',
        component:Login
    },
     {
        path:'login',
        component:Login
    },
    {
        path:'first-component',
        component:FirstComponent,
        // canActivate:[authGuard]
    },
    {
        path:'rxjs-basics',
        component:RxjsBasics
    },  
    {
        path:'data-binding',
        component:DataBinding
    },
    {
        path:'pipe',
        component:Pipes
    },
    {
        path:'combineObservable',
        component:CombineObservable
    },
    {   
        path:'signals',
        component:Signals
    },
    {
        path:'second-component',
        component:SecondComponent,
        canDeactivate:[deactivateGuard]
    },
    {
        path:'selectForm',
        component:SelectForm,
        canActivateChild:[authGuard],
        children:[
            {
                path:'template-form',
                component:TemplateForm
            },
            {
                path:'reactive-form',
                component:ReactiveForm
            }
        ]
    },
    {
        path:'user/:id',
        component:User
    },
    {
        path:'get-api',
        component:GetApi
    },
    {
        path:'post-api',
        component:PostApi
    },
    {
        path:'lifecycle',
        component:Lifecycle
    },
    {
        path:'template',
        component:Template
    },
    {
        path:'sub-beh',
        component:SubBehReplay
    }
];

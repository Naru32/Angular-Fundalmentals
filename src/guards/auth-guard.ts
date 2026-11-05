import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateChildFn = (route, state) => {

  let router = inject(Router)
  // console.log(route);
  // console.log(state);
  let status : any = localStorage.getItem('status')

  if(status == 'true'){
    return true
  }
  else{
    router.navigate(['login'])
    return false
  }
};

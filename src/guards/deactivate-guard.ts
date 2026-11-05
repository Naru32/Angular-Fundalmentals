import { CanDeactivateFn } from '@angular/router';
import { SecondComponent } from '../app/second-component/second-component';

export const deactivateGuard: CanDeactivateFn<SecondComponent> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  console.log(currentRoute);
  console.log(nextState);
  console.log(component);
  
  if(component.isDirty){
    let res = confirm('Are you sure want to navigate')
    if(res == true){
      return true
    }
    else{
      return false
    }
    
  }
  
  return true


};

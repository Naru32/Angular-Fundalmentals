import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if(value != null && typeof(value) == 'string'){
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return null
  }
}

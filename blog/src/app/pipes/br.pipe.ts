import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'br'
})
export class BrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(typeof(value)== "string") {
      const result = value.replace(/\n/g, "\n");
      return result;
    }
    
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
   if(value==0){
     return args[0];
   }
   else
   {
     return args[1];
   }
  }

}

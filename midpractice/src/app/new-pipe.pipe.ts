import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipe'
})
export class NewPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "+"+ args[0]+value;

  }
}

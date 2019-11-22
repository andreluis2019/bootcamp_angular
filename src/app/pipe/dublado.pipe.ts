import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dublado'
})
export class DubladoPipe implements PipeTransform {

  transform(value: boolean, ...args: any[]): any {
    if (value) {
      return 'Legendado';
    } else {
      return 'Dublado';
    }
  }

}

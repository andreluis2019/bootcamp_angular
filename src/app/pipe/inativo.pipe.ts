import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inativo'
})
export class InativoPipe implements PipeTransform {

  transform(value: boolean, ...args: any[]): any {
    if (value) {
      return 'Inativo';
    } else {
      return 'Ativo';
    }
  }

}

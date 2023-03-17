import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smartTruncate'
})
export class SmartTruncatePipe implements PipeTransform {

  transform(cadena: any, maxSize: number): string {
    const token = cadena.substr(0, maxSize);

    if (token.length < cadena.length) {
      return token.substr(0, token.lastIndexOf(' ')) + '...';
    }

    return cadena;
  }

}

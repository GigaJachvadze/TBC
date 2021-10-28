import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'genderPipe'
})

export class genderPipe implements PipeTransform {
  transform(value: boolean): string {
    if (value) {
      return "Female";
    } else {
      return "Male";
    }
  }
}

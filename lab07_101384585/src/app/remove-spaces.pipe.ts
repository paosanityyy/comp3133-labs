import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces',
  standalone: true
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: unknown): string {
    // Check if the value is a string; if not, return it as a string representation
    if (typeof value !== 'string') {
      return String(value);
    }

    // Replace all dashes '-' with spaces ' '
    return value.replace(/-/g, ' ');
  }

}

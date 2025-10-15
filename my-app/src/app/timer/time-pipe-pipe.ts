import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe'
})

export class TimePipePipe implements PipeTransform {
  transform(value: Date ): string {
    return value.toLocaleTimeString("en-En")
  }
}

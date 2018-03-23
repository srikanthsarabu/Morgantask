import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {
  transform(value: any, parameter: any, sortOrd: any, prevParam: any): any {
    let item = value;
    if (prevParam && prevParam !== parameter)
      sortOrd *= 1;
    else {
      sortOrd *= -1;
    }
    item.sort((a, b) => {
      if (a[parameter] < b[parameter]) {
        return -1 * sortOrd;
      } else if (a[parameter] > b[parameter]) {
        return 1 * sortOrd;
      } else {
        return 0;
      }
    });
    return item;

  }
}

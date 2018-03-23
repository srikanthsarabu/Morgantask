import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {
  transform(value: any, index: any, orgArr: any): any {
    console.log(value, index, orgArr)
    let a = value, len = value.length;
    if (len === 0) {
      a = [];
    }
    else if (len >= index) {
      a.length = index;
    } else {
      a = [];
      for (let i = 0; i < index; i++) {
        a.push(orgArr[i]);
      }
    }
    return a;

  }

}

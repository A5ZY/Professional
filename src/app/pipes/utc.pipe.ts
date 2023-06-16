import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment-timezone';
@Pipe({
  name: 'utc'
})
export class UtcPipe implements PipeTransform {

  transform(date: any, tz: any) {
    const utc = moment.tz(date, tz).utc().format('YYYY-MM-DD hh:mm:ss z');
    return utc;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './data.models';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: IUser[] | null, searchText: string) {
    //filter users based on searchText
    return value;
  }
}

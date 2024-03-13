import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './data.models';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: IUser[] | null, searchText: string) {
    return value
      ? value.filter((user: IUser) => {
          return user.name.toLowerCase().includes(searchText.toLowerCase());
        })
      : [];
  }
}

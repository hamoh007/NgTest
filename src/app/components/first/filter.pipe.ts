import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './data.models';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: IUser[] | null) {
    const searchText = '';
    return value
      ? value.filter((user) =>
          user.name.toLowerCase().includes(searchText.toLowerCase())
        )
      : [];
  }
}

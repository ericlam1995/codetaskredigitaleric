import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cvslistsort'
})
//Using pipe to make different kind of sort
export class CvslistsortPipe implements PipeTransform {
  transform(cvslist: any[], field: string ): any[]{
    if(!cvslist){
      return [];
    }else if(field){//Sort by ascending
      cvslist.sort((a,b) => a[field] < b[field] ? -1 : 1);
    }else{//Default sort
      cvslist.sort((a,b) => a < b ? -1 : 1);
    }
    return cvslist;
  }

}

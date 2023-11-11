import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class categoryPipe implements PipeTransform {
 private nome : string = 'e628';


  transform(value: string ): string {
  //   switch(value){
  //  case 'front-end': return 'code';
  //  case 'back-end': return 'code';
  // }



    return 'this.nome';
  }

}

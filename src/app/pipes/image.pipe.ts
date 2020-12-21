import { Pipe, PipeTransform } from '@angular/core';
import { config } from '../config/config';

const Url = config.Url + '/images';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  // tslint:disable-next-line: ban-types
  transform(img: String): string {

  if ( !img ) {
    return '../assets/images/no-image.png';
  }

  const imgUrl = `${ Url }/${ img }`;
  return imgUrl;
  }

}

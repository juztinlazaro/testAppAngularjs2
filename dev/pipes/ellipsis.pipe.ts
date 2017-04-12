import { Pipe } from '@angular/core';

@Pipe({
    name: "ellipsis"
})

export class EllipsisPipe {
  transform(text, length) {
    if (text.length > length) {
      return text.substr(0, length) + "...";
    }
    return text;
  }
}
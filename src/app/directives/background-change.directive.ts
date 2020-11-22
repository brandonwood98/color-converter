import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundChange]'
})
export class BackgroundChangeDirective {

  @Input()
  appBackgroundChange = '#fff';

  constructor() {
    document.body.style.backgroundColor = this.appBackgroundChange;
  }

}

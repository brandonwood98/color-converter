import { compileNgModule } from '@angular/compiler';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RGB } from 'src/models/rgb.model';
import { colorUtils } from 'src/utils/colors.util';

@Component({
  selector: 'app-color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.scss'],
})
export class ColorInputComponent implements OnInit, OnDestroy {
  hasError = false;
  colorControl: FormControl = new FormControl(
    null,
    Validators.pattern('^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$')
  );
  rgb!: RGB | null;
  subscriptions: Subscription[] = [];

  constructor() {
    this.subscriptions.push(
      this.colorControl.valueChanges.subscribe((value: string) => {
        this.hasError = this.colorControl.hasError('pattern');
        this.sanitiseHex(value);
        if (!this.hasError) {
          this.setStyles(value);
          this.rgb = colorUtils.hexToRGB(value);
        } else {
          this.resetStyles();
          this.rgb = null;
        }
      })
    );
  }

  ngOnInit(): void {}

  private sanitiseHex(value: string) {
    if (value.charAt(0) === '#') {
      this.colorControl.setValue(value.slice(1, value.length + 1), {
        emitEvent: false,
      });
    }
  }

  private setStyles(value: string) {
    document.documentElement.style.setProperty('--background', `#${value}`);
    document.documentElement.style.setProperty(
      '--primary',
      colorUtils.getContrast(value)
    );
  }

  private resetStyles() {
    document.documentElement.style.setProperty('--background', '#fff');
    document.documentElement.style.setProperty('--primary', '#000');
  }

  ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}

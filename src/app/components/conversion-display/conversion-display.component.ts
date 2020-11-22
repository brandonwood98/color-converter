import { Component, Input, OnInit } from '@angular/core';
import { RGB } from 'src/models/rgb.model';

@Component({
  selector: 'app-conversion-display',
  templateUrl: './conversion-display.component.html',
  styleUrls: ['./conversion-display.component.scss']
})
export class ConversionDisplayComponent implements OnInit {
  @Input()
  result!: RGB;

  constructor() { }

  ngOnInit(): void {
  }

}

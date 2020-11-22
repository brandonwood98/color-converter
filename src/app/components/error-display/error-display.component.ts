import { Component, OnInit } from '@angular/core';
import { inOutAnimation } from 'src/app/animations/in-out.animation';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  animations: [inOutAnimation],
  styleUrls: ['./error-display.component.scss'],
})
export class ErrorDisplayComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

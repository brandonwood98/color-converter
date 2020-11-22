import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionDisplayComponent } from './conversion-display.component';

describe('ConversionDisplayComponent', () => {
  let component: ConversionDisplayComponent;
  let fixture: ComponentFixture<ConversionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

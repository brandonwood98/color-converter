import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorInputComponent } from './components/color-input/color-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
import { BackgroundChangeDirective } from './directives/background-change.directive';
import { ConversionDisplayComponent } from './components/conversion-display/conversion-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorInputComponent,
    ErrorDisplayComponent,
    BackgroundChangeDirective,
    ConversionDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

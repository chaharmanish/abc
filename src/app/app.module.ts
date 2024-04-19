import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FirstModule } from './first/first.module';

@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [BrowserModule,FirstModule],
  providers: [],
  bootstrap: []
})
export class AppModule { }
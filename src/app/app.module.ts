import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NgxImageComparisonSliderModule } from 'ngx-image-comparison-slider';
import { HomeComponent } from './home/home.component';
import { PipesModule } from './pipes/pipes.module';
import { JasmineComponent } from './jasmine/jasmine.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    JasmineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxImageComparisonSliderModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

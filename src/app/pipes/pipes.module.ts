import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtcPipe } from './utc.pipe';



@NgModule({
  declarations: [
    UtcPipe
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    UtcPipe
  ]
})
export class PipesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../components/star/star.component';
import { StatusPipe } from '../pipes/status.pipe';
import { MaxValueDirective } from '../directives/max-value.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StarComponent,StatusPipe,MaxValueDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
   exports:[StatusPipe,StarComponent,MaxValueDirective]
})
export class SharedModule { }

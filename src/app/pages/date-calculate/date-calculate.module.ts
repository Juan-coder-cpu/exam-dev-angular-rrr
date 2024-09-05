import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateCalculateComponent } from './date-calculate.component';
import { DateCalculateRoutingModule } from './date-calculate-routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DateCalculateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    DateCalculateRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatNativeDateModule,
  ]
})
export class DateCalculateModule { }

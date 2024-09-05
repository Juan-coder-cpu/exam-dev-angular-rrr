import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NameModalComponent } from './name-modal.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [NameModalComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ]
})
export class NameModalModule { }

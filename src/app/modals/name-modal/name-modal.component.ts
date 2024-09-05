import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-name-modal',
  templateUrl: './name-modal.component.html',
  styleUrls: ['./name-modal.component.scss']
})
export class NameModalComponent implements OnInit {
  name: string = ''
  constructor(private dialogRef: MatDialogRef<NameModalComponent>) { }

  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close();
  }

  setValue(){
    this.dialogRef.close(this.name);
  }
}

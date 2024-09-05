import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NameModalComponent } from 'src/app/modals/name-modal/name-modal.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  passwordEncrypted: string
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showModal(){
    const dialogRef = this.dialog.open(NameModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      if (result !== undefined) {
        this.passwordEncrypted = result
      }else{
        this.passwordEncrypted = ''
      }
    });
  }
}

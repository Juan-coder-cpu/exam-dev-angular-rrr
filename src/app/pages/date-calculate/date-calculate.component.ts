import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-calculate',
  templateUrl: './date-calculate.component.html',
  styleUrls: ['./date-calculate.component.scss']
})
export class DateCalculateComponent implements OnInit {
  startDate = new Date();
  tipo: any
  value: number = 0
  result: Date
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    console.log('valores',this.startDate,this.tipo, this.value)
    switch (this.tipo) {
      case 'dia':
        const copiedDate1 = new Date(this.startDate.getTime());
        copiedDate1.setDate( this.startDate.getDate() + this.value );
        this.result = copiedDate1
        break;
        case 'mes':
          const copiedDate2 = new Date(this.startDate.getTime());
          copiedDate2.setMonth( this.startDate.getMonth() + this.value );
          this.result = copiedDate2
        break;
        case 'anio':
          const copiedDate3 = new Date(this.startDate.getTime());
          copiedDate3.setFullYear( this.startDate.getFullYear() + this.value );
          this.result = copiedDate3
        break;
    
      default:
        break;
    }
  }
}

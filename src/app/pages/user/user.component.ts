import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  error: string
  showBookList: boolean = false
  bookList: string[] = []
  form: FormGroup = new FormGroup({
    nombres: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
    apellidos: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
    fumas: new FormControl(true, Validators.required),
    actuamentePracticasLectura: new FormControl(false, Validators.required),
    newBook: new FormControl(''),
  });
  
  constructor(private matSnack: MatSnackBar) { }

  ngOnInit(): void {
  }

  submit(){
    if (this.form.valid) {
      console.log('VALORES: ',this.form.value)
      console.log('Lista de libros', this.bookList)
      this.matSnack.open('Exito. El formulario es valido', 'ok',{duration: 3000});
    }else{
      this.matSnack.open('Error. El formulario es invalido', 'ok',{duration: 3000});
    }
  }

  public isValid(controlName: string): boolean{
    const control = this.form.controls[`${controlName}`]
    return control.invalid && control.touched
  }

  public idRequired(controlName: string): boolean{
    const control = this.form.controls[`${controlName}`]
    return this.isValid(controlName) && control.errors?.['required']
  }

  public noWhitespaceError(controlName: string): boolean{
    const control = this.form.controls[`${controlName}`]
    return this.isValid(controlName) && control.errors?.['whitespace']
  }

  public noWhitespaceValidator(control: AbstractControl) {
    if(control.value.length > 0){
      const lastItem = control.value[control.value.length -1]
      console.log('lasta valude', lastItem)
      return lastItem === ' ' ? { 'whitespace': true }: null
    }else{
      console.log('noWhitespaceValidator vacio')
      return null
    }
  }

  changeRead(event: any){
    console.log('event', event)
    this.bookList = []
    this.showBookList = event.checked
  }

  addBook(){
    const control = this.form.controls['newBook']
    console.log('agregar libro', control.value)
    this.bookList.push(control.value)
    control.setValue('')
  }
}

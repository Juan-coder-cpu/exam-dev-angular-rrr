import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string | null;
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });
  
  constructor(private securityService: SecurityService, private matSnack: MatSnackBar, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  async submit(){
    if (this.form.valid) {
      console.log('this.form.value',this.form.value)
      const result = this.securityService.login({username: this.form.value.username, password: this.form.value.password})
      console.log('result', result)
      const res = await lastValueFrom(result)
      if(!res.exito){ //TODO: QUITAR ANTES DE ENVIARLO
        this.authService.setUser(this.form.value.username)
        this.router.navigate(['admin/index']);
      }else{
        this.matSnack.open(res.mensaje, 'ok',{duration: 3000});
      }
      console.log('respuesta del login', res)
    }else{
      this.error = "El usuario y password son requeridos"
    }
  }
}

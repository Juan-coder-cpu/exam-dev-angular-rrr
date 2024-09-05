import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ApiResponseInterceptor } from './interceptors/api-response.interceptor';
import { AdminModule } from './components/admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    AdminModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiResponseInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

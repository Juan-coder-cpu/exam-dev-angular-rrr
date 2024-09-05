import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ApiResponseType } from '../types/api-response.type';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ApiResponseInterceptor implements HttpInterceptor {

  constructor(private router: Router, private matSnack: MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('INTERCEPTOR')
    return next.handle(request).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          const message = this._getMessageError(err)
          if (err.status === ApiResponseType.Unauthorized) {       
            console.error('Unauthorized request:', err);
            // authService.delete();
            this.router.navigate(['']);
          }else if(err.status === ApiResponseType.ServerError || err.status === ApiResponseType.InternalServerError || err.status === ApiResponseType.NotFound ){
            // messageService.add({severity: 'error', detail: message})
            this.matSnack.open(message, 'ok',{duration: 3000});
            console.error('HTTP error:', err);

          } else {
            console.error('HTTP error:', err);
          }
        } else {
          console.error('An error occurred:', err);
        }
        return throwError(() => err); 
      }),
      // finalize(() => loadingService.stop())
    )
  }

  private _getMessageError(httpError: HttpErrorResponse): string {
    const apiResponseType: ApiResponseType = httpError.status
  let message: string = ''
  switch (apiResponseType) {
    case ApiResponseType.Ok:
      break;
    case ApiResponseType.BadRequest:
      message ='Ha ocurrido un error'
      break;
    case ApiResponseType.Unauthorized:
      message ='Acceso no autorizado'
      break;
    case ApiResponseType.NotFound:
      message ='No encontrado'
      break;
      case ApiResponseType.ServerError:
      case ApiResponseType.NoContent:
    case ApiResponseType.InternalServerError:
      message ='Ha ocurrido un error en el servicio'
      break;
    default:
      break;
  }
  return message
  }
}

import { SchedulerOption } from './../models/scheduler-option';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PastelConfigService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  public loadConfig(config: string): Observable<{}> {
    return this.http.get(`http://localhost:8881/api/${config}Config`)
      .pipe(catchError(error => this.handlerError(error, {})));;
  }

  public saveConfigChanges(data: {}, config: string): Observable<{}> {
    return this.http.post(`http://localhost:8881/api/${config}Config`, data)
      .pipe(catchError(error => this.handlerError(error, data)));
  }

  public resetJobs(): Observable<any> {
    return this.http.post(`http://localhost:8881/api/JobReset`, {})
      .pipe(catchError(error => this.handlerError(error, {})));;
  }

  public loadSchedulerOptions(): Observable<any> {
    return this.http.get<SchedulerOption>(`http://localhost:8881/api/ScheduleOptions`)
      .pipe(catchError(error => this.handlerError(error, {})));;
  }

  public success(message: string) {
    this.snackBar.open(message, 'Dismiss', {
      duration: 3 * 1000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'snackbar-success'
    })
  }

  private handlerError(error: HttpErrorResponse, data: any): any {
    const message = error.error.ExceptionMessage ? error.error.ExceptionMessage
      : error.error.Message ? error.error.Message : error.message;

    this.snackBar.open(`${message}(${error.statusText})`, 'Dismiss', {
      duration: 3 * 1000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'snackbar-error'
    })

    throw error;
  }

}

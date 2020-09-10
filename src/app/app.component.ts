import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  completed: any;
  error: any;
  resp: any;
  taskCounts: any;

  constructor(
    private http: HttpClient,
  ) {}

  reset(): void {
    this.completed = undefined;
    this.error = undefined;
    this.resp = undefined;
    this.taskCounts = undefined;
  }

  makeRequest(opt?: { makeFailedReq: boolean }): void {
    const url = opt?.makeFailedReq ? 'https://0.0.0.0/api/people/1' : 'https://swapi.dev/api/people/1';
    this.reset();
    this.http.get(url)
      .pipe(
        catchError((err, caught) => {
          console.warn('Caught Error', err);
          return throwError(err);
        }),
      )
      .subscribe({
        next: resp => {
          this.resp = resp;
        },
        error: err => {
          this.error = err;
        },
        complete: () => {
          this.completed = { complete: true };
        },
      });
  }

  checkTaskCounts(): void {
    const [ testability ] = (window as any).getAllAngularTestabilities();
    this.taskCounts = testability._ngZone._inner._zoneDelegate._taskCounts;
  }

}

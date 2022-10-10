import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

class Post {
  constructor(public id: string, public title: string, public body: string) {}
}

@Injectable({ providedIn: 'root' })
export class MyService {
  private endpoint = 'https://jsonplaceholder.typicode.com/xyz';

  constructor(private http: HttpClient) {}

  getPost(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.endpoint)
      .pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`; // client-side error
    } else {
      errorMessage = `Error Code: ${error.status}\n   Message: ${error.message}`; // server-side error
    }

    return throwError(() => {
      return errorMessage;
    });
  }
}

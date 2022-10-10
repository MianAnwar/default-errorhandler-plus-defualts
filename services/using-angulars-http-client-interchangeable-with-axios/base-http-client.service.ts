import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientService } from './base-http-client-axios.service';

export class BaseHttpClientService implements HttpClientService {
  constructor(private http: HttpClient) {}

  get<T>(endPoint: string): Observable<T> {
    return this.http.get<T>(endPoint, this.SetHeaders());
  }

  private SetHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'someAuthToken');
    return { headers };
    // return { };
  }
}

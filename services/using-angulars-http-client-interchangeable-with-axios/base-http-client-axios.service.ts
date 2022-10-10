import { Observable, from } from 'rxjs';
import axios, { AxiosRequestConfig } from 'axios';
import { map } from 'rxjs/operators';

export interface HttpClientService {
  get<T>(endPoint: string): Observable<T>;
}

export class BaseHttpClientAxiosService implements HttpClientService {
  constructor() {}

  get<T>(endPoint: string): Observable<T> {
    return from(axios.get<T>(endPoint, this.SetHeaders())).pipe(
      map((x) => x.data)
    );
  }

  private SetHeaders() {
    const defaultOptions = <AxiosRequestConfig>{
      headers: {
        Authorization: 'someAuthToken',
      },
    };

    return defaultOptions;
  }
}

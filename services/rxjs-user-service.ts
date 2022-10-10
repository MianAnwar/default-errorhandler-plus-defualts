import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';

export class RxjsUserService {
  getUsersUsingFromfetch() {
    return fromFetch('https://api.github.com/users?per_page=5').pipe(
      switchMap((response) => {
        if (response.ok) {
          // OK return data
          return response.json();
        } else {
          // Server is returning a status requiring the client to try something else.
          return of({ error: true, message: `Error ${response.status}` });
        }
      }),
      catchError((err) => {
        // Network or other error, handle here appropriately
        console.error(err);
        return of({ error: true, message: err.message });
      })
    );
  }

  getUsersUsingSimpleAjax() {
    return ajax('https://api.github.com/users?per_page=5').pipe(
      map((userResponse) => {
        return userResponse.response;
      }),
      catchError((error) => {
        console.log('error: ', error);
        return of(error);
      })
    );
  }

  getUsersUsingAjaxJSON() {
    return ajax.getJSON('https://api.github.com/users?per_page=5').pipe(
      map((userResponse) => {
        console.log('users: ', userResponse)
      }),
      catchError((error) => {
        console.log('error: ', error);
        return of(error);
      })
    );
  }
}

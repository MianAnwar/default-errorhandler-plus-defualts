import { ErrorHandler } from '@angular/core';
import { RxjsUserService } from 'src/services/rxjs-user-service';

export class MyErrorHandler implements ErrorHandler {
  mypurweErrorHander = new RxjsUserService();
  handleError(error: any): void {
    // this.mypurweErrorHander.hadleError(error);
    // console.log(error);
    debugger;
  }
}

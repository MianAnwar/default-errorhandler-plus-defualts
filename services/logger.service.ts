import { Injectable } from '@angular/core';

export abstract class Logger {
  info: any;
  warn: any;
  error: any;
}

@Injectable({ providedIn: 'root' })
export class LoggerService {
  info: any;
  warn: any;
  error: any;

  invokeConsoleMethod(type: string, args?: any): void {}
}

@Injectable({ providedIn: 'root' })
export class UserService {
  getUsersUsingFromfetch(): any {}
  getUsersUsingSimpleAjax(): any {}
}

/*
const noop = (): any => undefined;

@Injectable({ providedIn: 'root' })
export class NoOpLogger implements Logger {

  get info() {
    return noop;
  }
  get warn() {
    return noop;
  }
  get error() {
    return noop;
  }
}
*/

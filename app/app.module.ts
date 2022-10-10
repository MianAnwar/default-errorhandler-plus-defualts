import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MyErrorHandler } from 'src/error-handler/my-error-handler';
import {
  LogEntryService,
  LogPublisherConfig,
  LogPublisherService,
} from 'src/oop-injector-example/injector.services';
import { ConsoleLoggerService } from 'src/services/console-logger.service';
import { LoggerService, UserService } from 'src/services/logger.service';
import {
  Api,
  MobileApi,
  Sample,
  SampleXService,
} from 'src/services/new.service';
import { RxjsUserService } from 'src/services/rxjs-user-service';
import { BaseHttpClientAxiosService } from 'src/services/using-angulars-http-client-interchangeable-with-axios/base-http-client-axios.service';
import { ProfileService } from 'src/services/using-angulars-http-client-interchangeable-with-axios/github-profile.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function MyPublisherServiceFactoryX() {
  return new LogPublisherService([new LogPublisherConfig()]);
}

export function MyServiceFactory() {
  return new LogEntryService(
    new LogPublisherService([
      new LogPublisherConfig(),
      new LogPublisherConfig(),
    ])
  );
}

export function MyProfileServiceFactory() {
  return new ProfileService(new BaseHttpClientAxiosService());
}
const sample = new Sample();
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    Sample,
    // SampleXService,
    // { provide: Sample, useValue: sample },
    // {
    //   provide: SampleXService,
    //   useFactory: () => {
    //     debugger;
    //     return new SampleXService(sample);
    //   },
    // },

    // BaseHttpClientService,
    { provide: ProfileService, useValue: MyProfileServiceFactory() },
    // {
    //   provide: 'HttpClientService', // our interface
    //   useClass: BaseHttpClientAxiosService, // the base class we can switch to
    // },

    // { provide: ErrorHandler, useClass: MyErrorHandler },
    { provide: LoggerService, useClass: ConsoleLoggerService },
    { provide: UserService, useClass: RxjsUserService },
    { provide: LogPublisherService, useValue: MyPublisherServiceFactoryX() },
    { provide: LogEntryService, useValue: MyServiceFactory() },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

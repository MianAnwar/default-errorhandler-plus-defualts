import { Component, Injector } from '@angular/core';
import {
  LogEntryService,
  LogPublisherService,
} from 'src/oop-injector-example/injector.services';
import { LoggerService, UserService } from 'src/services/logger.service';
import { MyService } from 'src/services/my-service';
import { Sample, SampleXService } from 'src/services/new.service';
import { IProfileDto, ProfileService } from 'src/services/using-angulars-http-client-interchangeable-with-axios/github-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'defaultErrorHandler';
  profile: IProfileDto;
  link = 'https://api.github.com/users/';
  name: string;
  sampleXservice : SampleXService;

  constructor(
    private profileService: ProfileService,
    public myService: MyService,
    private logger: LoggerService,
    private logPublisherService: LogPublisherService,
    private logEntryService: LogEntryService,
    private userServics: UserService,

    private injector : Injector,
    private sample: Sample
  ) {
    this.sampleXservice = injector.get<SampleXService>(SampleXService);
  }

  onChange() {
    this.profileService
      .getGitHubProfile(this.link + this.name)
      .subscribe((data) => {
        this.profile = data;
      });
  }

  testLoggingService() {
    debugger;
    // Incorrect source file name and line number :(
    this.logger.invokeConsoleMethod(
      'info',
      'AppComponent: logger.invokeConsoleMethod()'
    );
    this.logger.invokeConsoleMethod(
      'warn',
      'AppComponent: logger.invokeConsoleMethod()'
    );
    this.logger.invokeConsoleMethod(
      'error',
      'AppComponent: logger.invokeConsoleMethod()'
    );

    // Correct source file name and line number :)
    this.logger.info('AppComponent: logger.info()');
    this.logger.warn('AppComponent: logger.warn()');
    this.logger.error('AppComponent: logger.error()');
  }

  testMyGlobalErrorHandler() {
    throw { type: 'demo type of' };
  }

  testMyGlobalErrorHandlerOnService() {
    this.myService.getPost().subscribe((x: any) => {
      debugger;
    });
  }

  testUserServiceUsingFromfetch() {
    this.userServics.getUsersUsingFromfetch().subscribe((response: any) => {
      debugger;
    });
  }
  testUserServiceUsingSimpleAjax() {
    this.userServics.getUsersUsingSimpleAjax().subscribe((response: any) => {
      debugger;
    });
  }
}

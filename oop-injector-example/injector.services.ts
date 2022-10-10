

export class LogPublisherConfig {
  loggerName: string | undefined = 'sample name';
  loggerLocation: string | undefined;
  isActive = false;
}



export class LogPublisherService {
  publishers: any = [];

  constructor(private logPublisherConfigs: LogPublisherConfig[]) {
    this.publishers = logPublisherConfigs;
  }
}



export class LogEntryService {
  level: number = 5;
  publishers: any;

  constructor(private publishersService: LogPublisherService) {
    this.publishers = this.publishersService.publishers;
  }

  debug() {
    console.log('method is calling at this point');
  }
}

import { Injectable } from "@angular/core";

// @Injectable()
export class Sample {
  int: number = 2;
  constructor() {}
  update() {
    this.int = 5;
  }
}

// @Injectable()
export class SampleXService {
  prop1 = 'Hello sample ex service';
  constructor(private sample: Sample) {}
}

@Injectable()
export class Api {
  constructor(public https: Sample) {
    console.log('Hello Api Provider');
  }
}

@Injectable()
export class MobileApi extends Api {
  constructor(public http: Sample) {
    super(http);
    console.log('For Mobile');
  }
}


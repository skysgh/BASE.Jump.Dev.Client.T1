import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-odata-01',
  templateUrl: './fetch-data.component.html'
})
export class FetchOData01 {
  public responseData: ResponseListItem[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    // Note that we are calling the Controller
    // using its default name and path, which
    // is a combination of the prefix applied
    // when registering the OData Entity (and specifying
    // which Controller name to look for) +
    // plus
    // the default name, which is the Controller's
    // name, minus the 'Controller' suffix.
    // What is not on this controller is a [Route]
    // (shown in the next example)
    // Notice also, url works without having to suffix
    // with Get
    http.get<R>(baseUrl + 'api/odata/v1.0/PresentationLayerExampleAEntityOData01?$orderby=Text').subscribe(result => {
      // Note that when dealing with an OData
      // Controller, and using default conventions
      // without a Route defined,
      // one gets back a bit richer data than
      // a standard API response, so have to delve
      // deeper.
      // Note that as per subsequent examples, it
      // quickly can change without much provocation
      // back to a simpler non-Odata response.
      // So have to learn to watch out...
      this.responseData = result.value;
    }, error => console.error(error));
  }
}

interface R {
  value: Array<ResponseListItem>;
}

interface ResponseListItem {
  Text: string;
  Description: string;
}

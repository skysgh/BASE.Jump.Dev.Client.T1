import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-odata-02',
  templateUrl: './fetch-data.component.html'
})
export class FetchOData02 {
  public responseData: ResponseListItem[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    // Similar to the last example, in that we are
    // calling a Controller using its default name
    // But this time we *are* using a Route to specify
    // it.
    // NOTE: it now doesn't work unless you either
    // define Get on the Url
    // Or apply two different HttpVerbs to the Get
    // action, one with empty string to show its the default
    // Action.
    // NOTE: The other big change to notice is that the data coming back
    // is no longer OData Rich... (no longer nested).
    http.get<R>(baseUrl + 'api/odata/v2.0/PresentationLayerExampleAEntityOData02?$orderby=Text').subscribe(result => {
      // Note that when dealing with OData
      // one gets back a bit richer data than
      // a standard API response, so have to delve
      // deeper.
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

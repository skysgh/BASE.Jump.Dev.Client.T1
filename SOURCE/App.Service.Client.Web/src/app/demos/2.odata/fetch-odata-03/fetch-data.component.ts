import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector:      'app-fetch-odata-03',
  templateUrl: './fetch-data.component.html'
})
export class FetchOData03 {
  public responseData: ResponseListItem[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<R>(baseUrl + 'api/odata/v1.0/AnyOtherRouteName/Get?$orderby=Text').subscribe(result => {
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

import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-rest-03',
  templateUrl: './fetch-data.component.html'
})
export class FetchRest03 {
  public responseData: ExampleAEntityDto[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<ExampleAEntityDto[]>(baseUrl + 'api/rest/DevLearn/ModuleLayerExampleAEntity').subscribe(result => {
      this.responseData = result;
    }, error => console.error(error));
  }
}

interface ExampleAEntityDto {
  text: string;
  description: string;
}

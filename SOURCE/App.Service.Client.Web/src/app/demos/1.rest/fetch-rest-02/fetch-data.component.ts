import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchRest02 {
  public responseData: ExampleAEntity[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<ExampleAEntity[]>(baseUrl + 'api/rest/DevLearn/PresentationLayerExampleAEntity').subscribe(result => {
      this.responseData = result;
    }, error => console.error(error));
  }
}

// Note how here we're returning a system entity, and not a DTO
// so have to use other attributes. 
interface ExampleAEntity {
  title: string;
  description: string;
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';

import { FetchRest01 } from './demos/1.rest/fetch-rest-01/fetch-data.component';
import { FetchRest02 } from './demos/1.rest/fetch-rest-02/fetch-data.component';
import { FetchRest03 } from './demos/1.rest/fetch-rest-03/fetch-data.component';

import { FetchOData01 } from './demos/2.odata/fetch-odata-01/fetch-data.component';
import { FetchOData02 } from './demos/2.odata/fetch-odata-02/fetch-data.component';
import { FetchOData03 } from './demos/2.odata/fetch-odata-03/fetch-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,

    FetchRest01,
    FetchRest02,
    FetchRest03,

    FetchOData01,
    FetchOData02,
    FetchOData03,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },

      { path: 'fetch-rest-01', component: FetchRest01 },
      { path: 'fetch-rest-02', component: FetchRest02 },
      { path: 'fetch-rest-03', component: FetchRest03 },

      { path: 'fetch-odata-01', component: FetchOData01 },
      { path: 'fetch-odata-02', component: FetchOData02 },
      { path: 'fetch-odata-03', component: FetchOData03 },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

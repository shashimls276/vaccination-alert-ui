import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { VaccinationAlertSubscriptionComponent } from './vaccination-alert-subscription/vaccination-alert-subscription.component';
import { VaccinationSearchComponent } from './vaccination-search/vaccination-search.component';
import { NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    VaccinationAlertSubscriptionComponent,
    VaccinationSearchComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

// import { HomeModule } from './bak.home/home.module';
// import { AboutModule } from './bak.about/about.module';
// import { BeyondModule } from './bak.beyond/beyond.module';
import { NavigationModule } from './navigation/navigation.module';
import { ForecastingModule } from './forecasting/forecasting.module';
// import { YnabConnectModule } from './ynab-connect/ynab-connect.module';
import { YnabApiModule } from './ynab-api/ynab-api.module';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    // HomeModule,
    // AboutModule,
    // BeyondModule,
    NavigationModule,
    ForecastingModule,
    // YnabConnectModule,
    YnabApiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

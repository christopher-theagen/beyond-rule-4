import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }

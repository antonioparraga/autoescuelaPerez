import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardComponent} from "./dashboard.component";
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    DashboardRoutingModule
  ],
})
export class DashboardModule { }

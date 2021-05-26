import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { TravelComponent } from './components/travel/travel.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    TravelComponent,
    HomeComponent,
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
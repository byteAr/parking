import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { GaleryComponent } from './components/galery/galery.component';
import { SliderComponent } from './components/slider/slider.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

import { NgxSplideModule } from 'ngx-splide';


@NgModule({
  declarations: [
    HomeComponent,
    GaleryComponent,
    SliderComponent,
    AboutusComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    NgxSplideModule
  ]
})
export class UserModule { }

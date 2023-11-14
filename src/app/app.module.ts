import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { NgxSplideModule } from 'ngx-splide';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    SharedModule,
    NgxSplideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

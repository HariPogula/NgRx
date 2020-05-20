import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng/primeng.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, LoadingComponent, MessageComponent],
  imports: [BrowserModule, AppRoutingModule, PrimengModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

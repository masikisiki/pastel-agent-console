import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PastelConfigService } from './services/pastel-config.service';
import { HttpClientModule } from '@angular/common/http';
  
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DefaultModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PastelConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }

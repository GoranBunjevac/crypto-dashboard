import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinService } from './services/coin.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './shared/material.module';
import { CoinTableComponent } from './coin-table/coin-table.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { GlobalStoreModule } from './store/global-store.module';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoinTableComponent,
    CoinDetailsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    GlobalStoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }

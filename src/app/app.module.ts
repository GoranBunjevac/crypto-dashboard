import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinService } from './services/coin.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { MaterialModule } from './shared/material.module';
import { CoinTableComponent } from './coin-table/coin-table.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { CoinStoreModule } from './store/coin-store.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoinTableComponent,
    CoinDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoinStoreModule,
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }

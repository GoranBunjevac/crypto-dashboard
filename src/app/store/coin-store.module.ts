import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from '.';
import { CoinEffects } from './effects/coin.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ CoinEffects])
],
  exports: [StoreModule]
})
export class CoinStoreModule { }

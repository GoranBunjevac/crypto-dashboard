import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CoinEffects } from './coin.effects';
import { EffectsModule } from '@ngrx/effects';
import { coinReducer } from './coin.reducers';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    StoreModule.forFeature('coin', coinReducer),
    EffectsModule.forRoot([CoinEffects]),
],
providers: [CoinEffects],
  exports: [StoreModule]
})
export class CoinStoreModule { }

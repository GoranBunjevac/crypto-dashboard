import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CoinEffects } from './effects/coin.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { coinReducer } from './reducers/coin.reducers';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    StoreModule.forFeature('coin', coinReducer),
    EffectsModule.forRoot([CoinEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
],
providers: [CoinEffects],
  exports: [StoreModule]
})
export class CoinStoreModule { }

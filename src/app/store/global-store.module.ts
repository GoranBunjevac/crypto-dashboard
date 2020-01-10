import { NgModule } from "@angular/core";
import {
  RouterStateSerializer,
  StoreRouterConnectingModule,
  NavigationActionTiming
} from "@ngrx/router-store";
import { CustomSerializer } from "./router-store/router-state.serializer";
import { StoreModule } from "@ngrx/store";
import { RouterStoreReduces } from "./router-store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { CoinStoreModule } from "./coin-store";
import { CoinEffects } from "./coin-store/coin.effects";

@NgModule({
  imports: [
    CoinStoreModule,
    StoreModule.forRoot(RouterStoreReduces.reducers),
    EffectsModule.forRoot([CoinEffects]),
    StoreRouterConnectingModule.forRoot({
      navigationActionTiming: NavigationActionTiming.PostActivation
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    })
  ],
  declarations: [],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ]
})
export class GlobalStoreModule {}

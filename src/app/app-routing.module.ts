import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoinTableComponent } from './coin-table/coin-table.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { SettingsComponent } from './settings/settings.component';


export const routes: Routes = [
  { path: 'coins', component: CoinTableComponent },
  { path: 'coin-details/:id', component: CoinDetailsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/coins', pathMatch: 'full' },
  { path: '**', redirectTo: '/coins' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

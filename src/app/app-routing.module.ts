import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoinTableComponent } from './coin-table/coin-table.component';


const routes: Routes = [
  { path: 'coins', component: CoinTableComponent },
  { path: '', redirectTo: '/coins', pathMatch: 'full' },
  { path: '**', redirectTo: '/coins' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

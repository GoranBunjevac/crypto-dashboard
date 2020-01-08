import { Component, OnInit } from '@angular/core';
import { CoinService } from './services/coin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //coins: Coin[];

  constructor(private coinService: CoinService) {}

  ngOnInit() {
    // this.coinService.getCoinData().subscribe(
    //   data => {
    //     // TODO: create constructor for creating coin
    //     this.coins = data.map(c => {
    //       let coin = new Coin();
    //       coin.id = c.id;
    //       coin.name = c.name;
    //       coin.symbol = c.symbol;
    //       coin.rank = c.rank;
    //       coin.priceUsd = c.priceUsd;
    //       coin.coinDetails = new CoinDetails();
    //       coin.coinDetails.availableSupply = c.availableSupply;
    //       coin.coinDetails.lastUpdated = c.lastUpdated;
    //       coin.coinDetails.marketCapUsd = c.marketCapUsd;
    //       coin.coinDetails.maxSupply = c.maxSupply;
    //       coin.coinDetails.percentChange1h = c.percentChange1h;
    //       coin.coinDetails.percentChange24h = c.percentChange24h;
    //       coin.coinDetails.percentChange7d = c.percentChange7d;
    //       coin.coinDetails.priceBtc = c.priceBtc;
    //       coin.coinDetails.totalSupply = c.totalSupply;
    //       coin.coinDetails.volumeUsd24h = c.volumeUsd24h;
    //     })
    //   }
    //   );
  }
}

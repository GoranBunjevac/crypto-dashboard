import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  fiatCurrencies = ['USD', 'EUR', 'CNY'];
  currencyCheckedIndex = 0;

  ngOnInit() {
  }

  currencyCheckboxChange(event: MatCheckboxChange, index: number) {
    // This allows only one checkbox to be checked among each checkbox
    this.currencyCheckedIndex = event.checked ? index : -1;
}

}

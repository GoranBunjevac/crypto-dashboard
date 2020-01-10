import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CoinTableComponent } from './coin-table.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatTableModule, MatSort, MatPaginator } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { RouterStoreReduces } from '../store';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { CoinDetailsComponent } from '../coin-details/coin-details.component';
import { Router, RouterModule,  } from '@angular/router';
import {Location} from "@angular/common";

describe('CoinTableComponent', () => {
  let component: CoinTableComponent;
  let fixture: ComponentFixture<CoinTableComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinTableComponent, MatSort, MatPaginator, CoinDetailsComponent ],
      imports: [ MatTableModule,
        RouterModule,
        StoreModule.forRoot(RouterStoreReduces.reducers),
        RouterTestingModule.withRoutes([
          {path: 'coin-details/:id', component: CoinDetailsComponent}
        ])],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(CoinTableComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show refresh button', () => {
    const refreshButton = fixture.debugElement
      .query(By.css('#refresh-button'));

    expect(refreshButton).toBeTruthy();
  });

  it('should redirect on details when click on row', fakeAsync(() => {
    fixture.nativeElement.querySelectorAll('tr')[0].click();

    //We wait for all pending promises to be resolved
    tick();

    expect(location.path()).toBe('coin-details/');
  }));

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});

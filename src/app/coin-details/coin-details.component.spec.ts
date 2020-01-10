import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDetailsComponent } from './coin-details.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterStoreReduces } from '../store';
import { RouterTestingModule } from '@angular/router/testing';

describe('CoinDetailsComponent', () => {
  let component: CoinDetailsComponent;
  let fixture: ComponentFixture<CoinDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinDetailsComponent ],
      imports: [ StoreModule.forRoot(RouterStoreReduces.reducers), RouterTestingModule ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});

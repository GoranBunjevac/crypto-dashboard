import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CoinTableComponent } from "./coin-table.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MatTableModule, MatSort, MatPaginator } from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { RouterStoreReduces } from "../store";
import { By } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

describe("CoinTableComponent", () => {
  let component: CoinTableComponent;
  let fixture: ComponentFixture<CoinTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoinTableComponent,
        MatSort,
        MatPaginator
      ],
      imports: [
        MatTableModule,
        RouterModule,
        StoreModule.forRoot(RouterStoreReduces.reducers)
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinTableComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should show refresh button", () => {
    const refreshButton = fixture.debugElement.query(By.css("#refresh-button"));

    expect(refreshButton).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});

import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SettingsComponent } from "./settings.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { RouterStoreReduces } from "../store/router-store";
import { RouterTestingModule } from "@angular/router/testing";

describe("SettingsComponent", () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        StoreModule.forRoot(RouterStoreReduces.reducers),
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    component.fiatCurrencies = ["USD", "EUR", "CNY"];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});

import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import {
  HttpTestingController,
  HttpClientTestingModule
} from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [HttpClient, HttpTestingController]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});

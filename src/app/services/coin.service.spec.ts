import { HttpClient } from "@angular/common/http";
import {
  HttpTestingController,
  HttpClientTestingModule
} from "@angular/common/http/testing";
import { CoinService } from "./coin.service";
import { TestBed } from "@angular/core/testing";
import { Coin } from "../models/coin";
import { getCoins } from "../mocks/mocks";

describe("CoinService", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let coinService: CoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [HttpClientTestingModule],
      // Provide the servise-under-test and its dependencies
      providers: [CoinService]
    });

    // Inject the http, test controller, and service-under-test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    coinService = TestBed.get(CoinService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests
    httpTestingController.verify();
  });

  it("should be created", () => {
    const service: CoinService = TestBed.get(CoinService);
    expect(service).toBeTruthy();
  });

  describe("#getCoins", () => {
    let expectedCoins: Array<Coin>;

    beforeEach(() => {
      coinService = TestBed.get(CoinService);
      // TODO: extract to mock
      expectedCoins = getCoins();
    });

    it("should return expected coins (called once)", () => {
      coinService.getCoinData("USD").subscribe(c => {
        expect(c).toEqual(
          expectedCoins,
          "should return coins with USD currencies"
        );
      }, fail);

      // CoinService should have made one request to GET coins
      // Currently it is impossible to test http requests in a service which contain query parameters
      // Workaround is to use the request matcher function
      const req = httpTestingController.expectOne(
        req =>
          req.method === "GET" &&
          req.url === "https://localhost:44319/coins/USD"
      );
      expect(req.request.method).toEqual("GET");

      // Respond with the mock coins
      req.flush(expectedCoins);
    });
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});

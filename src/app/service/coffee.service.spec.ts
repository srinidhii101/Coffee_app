import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CoffeeService } from './coffee.service';

describe('CoffeeService', () => {
  let httpTestingController: HttpTestingController;
  let service: CoffeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(CoffeeService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getData should return expected data', (done) => {
    var expectedData = [{ "id": 8140, "uid": "1d51bb33-369f-4d95-aac0-93620f3ba9e9", "blend_name": "Goodbye America", "origin": "Jalisco, Mexico", "variety": "Dega", "notes": "unbalanced, tea-like, baggy, butter, lavender", "intensifier": "structured" }]

    service.getCoffeeData().subscribe(
      data => {
        expect(data).toEqual(expectedData);
        done();
      });
    const testRequest = httpTestingController.expectOne('https://random-data-api.com/api/coffee/random_coffee?size=50');
    testRequest.flush(expectedData);
  });

  it('#getData should use GET to retrieve data', () => {
    service.getCoffeeData().subscribe();
    const testRequest = httpTestingController.expectOne('https://random-data-api.com/api/coffee/random_coffee?size=50');
    expect(testRequest.request.method).toEqual('GET');
  });

  // Uncomment the below test if you want to check server error if API not working

  // it('#getData should return an empty object on error', (done) => {
    // var expectedData = [{ "id": 8140, "uid": "1d51bb33-369f-4d95-aac0-93620f3ba9e9", "blend_name": "Goodbye America", "origin": "Jalisco, Mexico", "variety": "Dega", "notes": "unbalanced, tea-like, baggy, butter, lavender", "intensifier": "structured" }]

  //   service.getCoffeeData().subscribe(data => {
  //     expect(data).toEqual(expectedData);
  //     done();
  //   });
  //   const testRequest = httpTestingController.expectOne('https://random-data-api.com/api/coffee/random_coffee?size=50');

  //   testRequest.flush('error', { status: 500, statusText: 'Broken Service' });
  // });
});

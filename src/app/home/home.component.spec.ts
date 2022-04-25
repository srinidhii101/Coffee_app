import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot({})
      ],
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Checking if Home Component Property Start Is Equal to 0
  it(`should have as Pagination Start Page = 0 `, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.start).toEqual(0);
  });

  // Checking if Home Component Property End Is Equal to 0
  it(`should have as Pagination End Page = 10 `, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.end).toEqual(10);
  });

  // Checking if Home Component Property Data Is Empty Array
  it(`should have Data as empty`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.data).toEqual([]);
  });

  // Checking if Home Component Property Data Is Empty Array
  it(`should have Data as empty`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.data).toEqual([]);
  });

  it('Should Click On Next Page', async () => {
    const fixture = TestBed.createComponent(HomeComponent);
    let button = fixture.debugElement.nativeElement.querySelectorAll('button')[1];
    button.click();
    expect(fixture.debugElement.componentInstance.start).toEqual(10);
    expect(fixture.debugElement.componentInstance.end).toEqual(20);
  });

  it('Should Click On Prevous Page', async () => {
    const fixture = TestBed.createComponent(HomeComponent);
    let button = fixture.debugElement.nativeElement.querySelectorAll('button')[0];
    button.click();
    expect(fixture.debugElement.componentInstance.start).toEqual(0);
    expect(fixture.debugElement.componentInstance.end).toEqual(10);
  });


});

import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../service/coffee.service';
import * as coffeeAction from '../ngrx-store/actions/coffee.actions';
import { Store } from '@ngrx/store';
import { Coffee } from '../model/coffee';
import { State } from '../ngrx-store/reducers/coffee.reducer';
import * as appState from '../ngrx-store/reducers/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Coffee[] = [];
  start: any = 0;
  end: any = 10

  constructor(
    private store: Store<{ coffee: State }>,
    public _CoffeeService: CoffeeService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(coffeeAction.getCoffeeData());
    this.store.select(appState.getCoffees).subscribe(
      payload => {
        if (payload != undefined) {
          console.log(payload)
          this.data = payload
          this._CoffeeService.allCoffee = payload;
        }
      }
    );
  }

  nextPage() {
    console.log("Next Page")
    if (this.end < 50) {
      this.end = this.end + 10;
      this.start = this.start + 10;
    }
  }
  previousPage() {
    console.log("Previous Page")
    if (this.end > 10) {
      this.end = this.end - 10;
      this.start = this.start - 10;
    }
  }

  clickCoffee(item: any) {
    this._CoffeeService.selectedCoffee = item;
    this.router.navigate([`detail/${item.id}`])
  }

}

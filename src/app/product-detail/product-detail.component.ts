import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoffeeService } from '../service/coffee.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  currentID: any;
  selectedCoffee: any;

  constructor(public router: Router, public activatedRoute: ActivatedRoute, public _CoffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != null && params['id'] != undefined && params['id'] != "") {
        this.currentID = params['id'];
        if (this._CoffeeService.selectedCoffee != undefined && this._CoffeeService.selectedCoffee != null) {
          this.selectedCoffee = this._CoffeeService.selectedCoffee
        }
        else {
          this.router.navigate(['/'])
        }
      }
      else {
        this.router.navigate(['/'])
      }
      console.log("Current Route", this.currentID)
    });
  }

}

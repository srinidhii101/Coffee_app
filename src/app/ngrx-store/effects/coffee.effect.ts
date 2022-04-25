import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { CoffeeService } from '../../service/coffee.service';
import * as coffeeAction from '../actions/coffee.actions';

@Injectable()
export class coffeeEffects {

    constructor(
        private actions$: Actions,
        private coffeeService: CoffeeService
    ) { }

    coffeeData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(coffeeAction.getCoffeeData),
            exhaustMap(action =>
                this.coffeeService.getCoffeeData().pipe(
                    map(response => coffeeAction.getCoffeeDataSuccess(response)),
                    catchError((error: any) => of(coffeeAction.getCoffeeDataFailure(error))))
            )
        )
    );

}

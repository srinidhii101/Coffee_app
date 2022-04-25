import { createAction, props } from '@ngrx/store';
import { Coffee } from '../../model/coffee';

export const GET_COFFEE = '[Login Page] Login';
export const GET_COFFEE_SUCCESS = '[Login Page] Get Data Success';
export const GET_COFFEE_FAILURE = '[Login Page] Get Data Failure';

export const getCoffeeData = createAction(
  GET_COFFEE
);

export const getCoffeeDataSuccess = createAction(
  GET_COFFEE_SUCCESS,
  props<any>()
)

export const getCoffeeDataFailure = createAction(
  GET_COFFEE_FAILURE,
  props<{message: string}>()
)
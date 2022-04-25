
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { coffeeFeatureKey, CoffeeRootState, State } from './coffee.reducer';

const getCoffeeFeature = createFeatureSelector<CoffeeRootState, State>(coffeeFeatureKey);

export const getCoffees = createSelector(getCoffeeFeature,
    state => {
        if (state != undefined) {
            return state.coffeeData
        }
        else {
            return null
        }
    });
import { Action, createReducer, on } from '@ngrx/store';
import { Coffee } from '../../model/coffee';
import * as coffeeAction from '../actions/coffee.actions';
import * as _ from 'lodash';

export interface State {
    coffeeData: Coffee[];
    isLoading?: boolean;
    isLoadingSuccess?: boolean;
    isLoadingFailure?: boolean;
}

export const initialState: State = {
    coffeeData: [],
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingFailure: false
};

export const coffeeFeatureKey = 'coffee';

export interface CoffeeRootState {
  [coffeeFeatureKey]: State;
}

export const coffeeReducer = createReducer(
    initialState,
    on(coffeeAction.getCoffeeData, (state) => ({ ...state, isLoading: true })),
    on(coffeeAction.getCoffeeDataSuccess, (state, result) => {
        var objArray: any = [];
        Object.keys(result).forEach(key => objArray.push(
            result[key]));
        return { coffeeData: objArray, isLoading: false, isLoadingSuccess: true }
    }
    ),
);

export function reducer(state: State | undefined, action: Action): any {
    return coffeeReducer(state, action);
}

// export const getCoffeeData = (state: State) => {
//     return {
//         coffeeData: state.coffeeData,
//         isLoading: state.isLoading,
//         isLoadingSuccess: state.isLoadingSuccess
//     };
// };

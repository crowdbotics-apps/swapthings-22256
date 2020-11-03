import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn51167200Reducer from '../features/SignIn51167200/redux/reducers'
import Dashboard12167199Reducer from '../features/Dashboard12167199/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn51167200: SignIn51167200Reducer,
Dashboard12167199: Dashboard12167199Reducer,

});
import {createStore,applyMiddleware,Store } from "redux";

import thunk from "redux-thunk";
import reducer,{IApplicationState } from "./reducer";


export const store=(function configureStore():Store<IApplicationState>{
    const _store=createStore(reducer,{},applyMiddleware(thunk));
    return _store;
})();
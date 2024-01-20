import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { riskToleranceReducer } from "./Reducers/risktolerance";

const composeEnhancers = composeWithDevTools({
    riskToleranceReducer,
});
const rootReducer = combineReducers({
    riskToleranceReducer,
})
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store
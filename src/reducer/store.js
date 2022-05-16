import { combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
    cart: cartReducer
}

const reducer = combineReducers({
    cart: cartReducer,
})

const middleware = [thunk] 

const store = createStore(reducer, initialState)


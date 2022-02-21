import PRODUCTS from "../data/products";
// import { FETCH_PRODUCTS } from "./actions";
import { PRODUCTS_FETCH_SUCCEEDED, PRODUCTS_FETCH_FAILED, SET_LOADING } from "./actions";

const initialState = {
    products: PRODUCTS,
    isLoading: false
}

const productsReducer = (state = initialState, action) => {
    // console.log(action.products);
    switch (action.type) {
        case PRODUCTS_FETCH_SUCCEEDED:
            // console.log(action.products);
            // return {...state,products:action.products};
            return state;
        case PRODUCTS_FETCH_FAILED:
            console.log(action.message);
            return state;
        case SET_LOADING:
            return {...state,isLoading: action.loading}
        default:
            return state;
    }
}
export default productsReducer;
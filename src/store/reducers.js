import PRODUCTS from "../data/products";
import { PRODUCTS_FETCH_SUCCEEDED, PRODUCTS_FETCH_FAILED, FETCH_PRODUCTS } from "./actions";

const initialState = {
    products: PRODUCTS,
    isLoading: false
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { ...state, isLoading: true }
        case PRODUCTS_FETCH_SUCCEEDED:
            return { isLoading: false, products: PRODUCTS }
        case PRODUCTS_FETCH_FAILED:
            return { ...state, isLoading: false };
        default:
            return state;
    }
}
export default productsReducer;
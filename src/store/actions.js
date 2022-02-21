// import PRODUCTS from "../data/products";

export const FETCH_PRODUCTS="FETCH_PRODUCTS";
export const PRODUCTS_FETCH_SUCCEEDED="PRODUCTS_FETCH_SUCCEEDED";
export const PRODUCTS_FETCH_FAILED="PRODUCTS_FETCH_FAILED";
export const SET_LOADING="SET_LOADING";


export const fetchProducts=()=>{
    // console.log(PRODUCTS);
    return {
        type: FETCH_PRODUCTS
        // products: PRODUCTS
    }
}

export const setLoading=(loading)=>{
    return {
        type: SET_LOADING,
        loading: loading
    }
}


import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_PRODUCTS, PRODUCTS_FETCH_FAILED, PRODUCTS_FETCH_SUCCEEDED} from './store/actions';

function* loadProducts() {

    try {
        const products = yield fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                if (response.ok)
                    return response.json();
                else
                    throw new Error("Something went wrong");
            })
            .then((data) => data)
        yield put({ type: PRODUCTS_FETCH_SUCCEEDED, products: products });

    } catch (e) {

        yield put({ type: PRODUCTS_FETCH_FAILED, message: e.message });
    }

}



function* mySaga() {
    yield takeEvery(FETCH_PRODUCTS, loadProducts);
}

export default mySaga;
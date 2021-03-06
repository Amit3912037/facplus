import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Category from './Category';
import * as productsActions from '../store/actions'
// import PRODUCTS from '../data/products';

export default function Body() {

    const [productsArray, setProductsArray] = useState([]);
    const [categoryArray, setCategoryArray] = useState([]);

    const dispatch = useDispatch();
     const categories = useSelector(state => state.products.products);
    // const categories=PRODUCTS;

    useEffect(() => {
            dispatch(productsActions.fetchProducts());
    }, [dispatch,categories])

    useEffect(() => {
        const items = [];
        const cates = [];
        for (const category in categories) {
            items.push(categories[category]);
            cates.push(category);
        }
        setProductsArray(items);
        setCategoryArray(cates);

    }, [categories])



    return (
        <>
            {productsArray.map((item, index) => <Category name={categoryArray[index]} key={index} items={item} />)}
        </>
    )
}

import React from 'react'
import Item from './Item'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Category(props) {
    return (
        <>
            <div className='m-3'>
                <div className='font-bold text-2xl m-2'>{false?<Skeleton width={200}/>:props.name}</div>
                <div className='flex overflow-x-auto border-2 border-gray-100 bg-sky-100'>
                    {
                        props.items && props.items.map(((item, index) =>
                            <Item
                                key={index}
                                title={item.title}
                                imageUrl={item.imageUrl}
                            />))
                    }
                </div>
            </div>
        </>


    )
}

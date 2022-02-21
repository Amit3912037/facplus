import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Item(props) {
  return (
    <div className='min-w-max bg-white mx-2 my-4 text-center  transition ease-in-out duration-500 hover:scale-105 '>
      {false? <Skeleton height={150} width={150} /> :<img className="w-52 h-52" src={props.imageUrl} alt="alt-img" />}
      <p className="">{false?<Skeleton/> :props.title}</p>
      {false?<Skeleton/> :<button className='bg-yellow-500 px-3 py-1 my-2'>Add to Cart</button>}
    </div>


  )
}

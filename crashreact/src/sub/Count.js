import React, { useContext, useState } from 'react'
import { StoreContext } from '../StoreContext'

export default function Count() {
    const [ store, setStore] = useContext(StoreContext);
  
  return (
    <div className='shop__nav'>
      <h5>Learning State Management with context API</h5>

      <h6>{store.length}</h6>
      
  </div>
  )
}

import React, { useContext } from 'react'
import { StoreContext } from './StoreContext'
import "./App.css";

function Store() {

    const [store,setStore] =  useContext(StoreContext);

  return (
    <div className='shop__store'>
        {store.map( st => (
            <div className='shop__store__item' key={st.code}>
                <h3>{st.name}</h3>
                <p className='shop__store__item__size'>size: {st.size}</p>
            </div>
        ))}
    </div>
  )
}
export default Store
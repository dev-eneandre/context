import React, { useState, useContext, useEffect } from 'react';
import "./App.css";
import { StoreContext } from './StoreContext';

const AddItem = () => {

  const [name, setName] = useState("");
  const [size, setSize] = useState("");


  const [ store, setStore] = useContext(StoreContext);  
  
  const updateName = (event) => {
    setName(event.target.value);
  }
  const updateSize = (event) => {
    setSize(event.target.value);
  }

  const addItem = (e) => {
    e.preventDefault();
    setStore(prevVal => [...prevVal, {name : name, size : setSize}])  
  }

  return (
    <div className='AddItem'>
      
        <h3 className='AddItem__header'>Add More Items To Shopping List</h3>

        <form className='AddItem__form'>
          <input type="text" name="name" value={name} onChange={updateName} placeholder="name of product" />
          <input type="text" name="size" value={size} onChange={updateSize} placeholder="size" />
          <button onClick={addItem}>Add Item</button>
        </form>
    </div>
  )
}

export default AddItem
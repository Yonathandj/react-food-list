import React from 'react';

const Add = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add item</label>
      <input 
        type="text" 
        placeholder='Add new item'
        className='addBar'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
    </form>
  )
}

export default Add;
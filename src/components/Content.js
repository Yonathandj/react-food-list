import React from 'react';
import Item from './Item';

const Content = ({ listItem, handleDelete, handleCheck }) => {
  return (
    <>
      {
        listItem.length ? 
          <Item 
            listItem={listItem}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            /> 
          : 
          <p className='list-empty-text'>Sorry, list is empty</p>
      }
    </>
  )
}

export default Content
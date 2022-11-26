import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Item = ({ listItem, handleDelete, handleCheck }) => {
  return (
    <ul>
      {
        listItem.map(item => (
          <li key={item.id}>
            <div className='checkbox'>
              <input type="checkbox" onChange={() => handleCheck(item.id)}/>
              <h3>{item.item}</h3>
            </div>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                className='trash-icon'
              />
          </li>
        ))
      }
    </ul>
  )
}

export default Item
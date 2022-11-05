import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Item = ({ listItem, handleDelete }) => {
  return (
    <ul>
      {
        listItem.map(item => (
          <li key={item.id}>
            <div className='checkbox'>
              <input type="checkbox" name="checked"/>
              <h4>{item.name}</h4>
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
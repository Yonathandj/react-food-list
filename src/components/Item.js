import React from 'react'

const Item = ({listItem}) => {
  return (
    <ul>
      {
        listItem.map(item => (
          <li key={item.id}>
            <h4>{item.name}</h4>
          </li>
        ))
      }
    </ul>
  )
}

export default Item
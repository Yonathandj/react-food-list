import React from 'react'
import Item from './Item'

const Content = ({listItem}) => {
  return (
    <main>
      {
        listItem.length ? 
          <Item listItem={listItem}/> 
          : 
          <p className='list-empty-text'>Sorry, list is empty</p>
      }
    </main>
  )
}

export default Content
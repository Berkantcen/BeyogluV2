import React from 'react'

const SingleMenuItem = ({ item }) => {
  return (
    <div className='single-menu-item'>
      <div className='menu-item-header'>
        <p className='menu-item-name'>{item.name}</p>
        <p>{item.price} TL </p>
      </div>
      {item.description && (
        <p className='menu-item-description'>{item.description}</p>
      )}
    </div>
  )
}

export default SingleMenuItem

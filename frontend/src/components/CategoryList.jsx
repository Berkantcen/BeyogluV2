import React from 'react'
import { useContext } from 'react'
import AppLevelContext from '../context/AppLevelContext'
import CategoryItem from './CategoryItem'

const CategoryList = () => {
  const { menuList } = useContext(AppLevelContext)
  return (
    <div className='category-container'>
      {menuList.map((category, idx) => (
        <CategoryItem category={category} key={idx} />
      ))}
    </div>
  )
}

export default CategoryList

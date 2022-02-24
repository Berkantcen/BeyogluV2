import React from 'react';
import SingleMenuItem from './SingleMenuItem';

const CategoryItem = ({ category }) => {
  function getSubCategoryItems(sub_category){
    return(sub_category.items.map((item) => (
        <SingleMenuItem item={item} key={item.id} />
    )))
  }


  return (
    <div
      className={
        category.bg === 'dark'
          ? 'category-item bg-dark'
          : 'category-item bg-light'
      }
      id={category.name}>
      
      <div className='category-item-name'>{category.name}</div>
      {category.sub_message && (
        <p className='sub_message'>({category.sub_message})</p>
      )}

      <img src={category.image} alt='' />

      {category.items && category.items.map(item =>(
              <SingleMenuItem item={item} key={item.id} />
      ))}

      {category.sub_categories && category.sub_categories.map(sub_category => (
        <div className='sub_category' key={sub_category.id}>
          <div className='sub_category_name'>{sub_category.name}</div>
          {sub_category.items && sub_category.items.map(item => (
            <SingleMenuItem item={item} key={item.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CategoryItem;

import React from 'react';
import SingleMenuItem from './SingleMenuItem';

const CategoryItem = ({ category }) => {
  return (
    <div
      className={
        category.bg === 'dark'
          ? 'category-item bg-dark'
          : 'category-item bg-light'
      }
      id={category.name}
    >
      <div className="category-item-name">{category.name}</div>
      {category.sub_message && (
        <p className="sub_message">({category.sub_message})</p>
      )}

      <img src={category.image} alt="" />

      {category.items &&
        category.items.map(
          (item, idx) =>
            !item.sub_category && <SingleMenuItem item={item} key={idx} />
        )}

      {category.sub_category &&
        category.sub_category.map((sub_category_single, idx) => (
          <div className="sub_category" key={idx}>
            <div className="sub_category_name">{sub_category_single}</div>
            {category.items &&
              category.items.map(
                (item, idx) =>
                  item.sub_category === sub_category_single && (
                    <SingleMenuItem item={item} key={idx} />
                  )
              )}
          </div>
        ))}
    </div>
  );
};

export default CategoryItem;

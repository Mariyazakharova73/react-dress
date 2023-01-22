import React from 'react';
import { ICategoriesProps } from '../types/types'
import { categories } from '../utils/variables'

const Categories: React.FC<ICategoriesProps> = ({ categoryId, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={categoryId === index ? 'active' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

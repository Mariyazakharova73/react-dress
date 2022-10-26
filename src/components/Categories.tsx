import React from 'react';

type CategoriesProps = {
  categoryId: number;
  onClickCategory: any;
}

const Categories: React.FC<CategoriesProps> = ({ categoryId, onClickCategory }) => {
  const categories = ['Все', 'Комбинация', 'Кожаные', 'Длинные', 'Короткие', 'Пиджак'];

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

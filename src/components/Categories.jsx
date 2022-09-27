import React from 'react';

function Categories({ categoryId, onClickCategory }) {
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

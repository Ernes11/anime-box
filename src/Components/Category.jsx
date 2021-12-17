import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CategoryItem } from "../const";

export const Category = () => {
  const [categories, setCategories] = useState(CategoryItem);
  const renderCategoryItem = () => {
    return categories.map((item) => (
      <Link key={item.id} to={`/${item.name}`} className="category__item text_5">
        <span>{item.name}</span>
        <img src={item.img} alt={item.name} />
      </Link>
    ));
  };
  return <div className="category ">{renderCategoryItem()}</div>;
};

import React from 'react';

export const ProductItem = ({ id, title, photo, price, category}) => {
    return (
        <div className="products">
          <div className="product__photo">
              <img src={photo} alt="" />
          </div>
          <div className="product__title">{title}</div>
              <div className="product__box text_quaternary">
                  <div className="product__category text_5 ">{category}</div>
                  <div className="product__price text_6">{price}com</div>
              </div>
        </div>
    )
}
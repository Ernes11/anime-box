import React, { useState, useEffect } from "react";
import { Input } from "../Components/Input";
import { OrderingItem } from "../const/";
import { Button } from "../UI/Button";
import navArrow from "../assets/images/icons/nav-arrow.svg";
import itemImg from "../assets/images/ordering-image.png";

export const OrderingScreen = () => {
  let count = 0;
  const [items, setItems] = useState(OrderingItem);

  const getItemName = (text) => {
    console.log(text);
  };
  const getItemNumber = (text) => {
    console.log(text);
  };
  const getItemAddress = (text) => {
    console.log(text);
  };

  const renderItems = () => {
    return items.map((item, index) => {
      count += Number(item.price);
      return (
        <div key={index} className="ordering__item">
          <span>{item.title}</span>
          <span>{item.price} сом</span>
        </div>
      );
    });
  };
  return (
    <div className="ordering">
      <div className="container ordering__content">
        <div className="ordering__box">
          <div className="left">
            <h1 className="ordering__title text_9">Оформление заказа</h1>
            <div className="ordering__input">
              <Input placeholder="Имя" action={getItemName} />
            </div>
            <div className="ordering__input">
              <Input placeholder="Номер" action={getItemNumber} />
            </div>
            <div className="ordering__input">
              <Input placeholder="Адрес" action={getItemAddress} />
            </div>
            {/* <Input type= {'password'}/> */}
          </div>

          <div className="right">
            <div className="ordering__image">
              <img src={itemImg} alt="" />
            </div>
            <div className="ordering__block transparent">
              <div className="ordering__block-title text_quaternary">
                Доставка
              </div>
              <div className="ordering__block-descr text_8">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta
              </div>
            </div>
          </div>
        </div>
        <div className="ordering__items text_quaternary">
          {renderItems()}
          {count}
          <div className="ordering__item">
            <span>Цена</span>
            <span>{count} сом</span>
          </div>
        </div>
        <div className="ordering__box bottom">
          <div className="left">
            <div className="ordering__block transparent">
              <div className="ordering__block-title text_quaternary">
                Доставка
              </div>
              <div className="ordering__block-descr text_8">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta
              </div>
            </div>
          </div>
          <div className="right">
              <div className="ordering__btn">
                  <Button text='Купить' />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

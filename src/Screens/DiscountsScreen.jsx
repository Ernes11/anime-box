import React from "react";

import girl from "../assets/images/anime_girl.png";
import { Button } from "../UI/Button";

export const DiscountsScreen = ({}) => {
  return (
    <div className="discounts">
      <div className="discounts__blog discounts__blog_light">
        <div className="discounts__content container">
            <div className="discounts__text">
                <h2 className="discounts__title text_primary">Купоны и скидки</h2>
                <p className="discounts__descr text_quaternary">Купоны и скидки магазина Анибокс</p>
            </div>
            <div className="discounts__img">
                <img src={girl} alt="" />
            </div>
        </div>
      </div>
      <div className=" discounts__blog discounts__blog_dark">
      <div className="discounts__content container">
            <div className="discounts__text">
                <h2 className="discounts__title text_secondary">Пройди тест и получи купон на 99% скидку</h2>
               <div className="discounts__btn">
                   <Button text="Пройти" type="light" />
               </div>
            </div>
            <div className="discounts__img">
                <img src={girl} alt="" />
            </div>
        </div>
      </div>
      <div className="discounts__blog discounts__blog_danger">
        <div className="discounts__content container"></div>
      </div>
    </div>
  );
};

import React from "react";

import { Logo } from "../assets/images/Logo";

export const Footer = () => {
  return (
    <footer className="footer">
            
      <div className="footer__top container">
                
        <div className="footer__logo">
                    
          <Logo width="500" height="178" color1="#ffffff" color2="#ffffff" />
                  
        </div>
                
        <div className="footer__information text_quaternary">
                    
          <div className="footer__info">
                        <a href="">Хиты продаж</a>
                        <a href="">Анибоксы</a>
                      
          </div>
                    
          <div className="footer__info">
                        <a href="">Поиск</a>
                        <a href="">Категории</a>
                      
          </div>
                    
          <div className="footer__info">
                        <a href="">Купон за подписку</a>
                        <a href="">Купон за тест</a>
                      
          </div>
                    
          <div className="footer__info">
                        <a href="">Прочее</a>
                        <a href="">История</a>
                      
          </div>
                    
          <div className="footer__info">
                        <a href="">Популярные категории</a>
                        <a href="">Новости</a>
                      
          </div>
                  
        </div>
              
      </div>
            
      <div className="footer__bottom container">
                
        <div className="footer__contacts">
                    <a href="">Приваси Полиси</a>
                    <a href="tel:996111111111">+996 111 11 11 11</a>
                    
          <div className="footer__social">
                        
            <img
              src="https://w7.pngwing.com/pngs/1024/475/png-transparent-circle-angle-material-gray-circle-pattern-border-texture-white.png"
              alt=""
            />
                        
            <img
              src="https://w7.pngwing.com/pngs/1024/475/png-transparent-circle-angle-material-gray-circle-pattern-border-texture-white.png"
              alt=""
            />
                        
            <img
              src="https://w7.pngwing.com/pngs/1024/475/png-transparent-circle-angle-material-gray-circle-pattern-border-texture-white.png"
              alt=""
            />
                      
          </div>
                  
        </div>
              
      </div>
          
    </footer>
  );
};

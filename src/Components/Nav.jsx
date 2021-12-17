import React from 'react';
import { Link } from "react-router-dom";
import {Logo} from '../assets/images/Logo';

export const Nav = () => {
    return (
        <nav className="nav">
            <div className="container nav__content text_quaternary">
                <Link to="/about" className="nav__item">О нас</Link>
                <Link to="/news" className="nav__item">Блог</Link>
                <Link to="/" className="nav__item">
                    < Logo color1='red' />
                </Link>
                <Link to="/store" className="nav__item">Магазин</Link>
                <Link to="discounts" className="nav__item">Купоны и скидки</Link>
            </div>
        </nav>
    )
}
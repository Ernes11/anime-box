import React from 'react';
import { CircleButton } from '../UI/CircleButton';

const BoxItem = ({id, photo, title, desc}) => {
    return(
        <div className="box">

            <img className="box__img" src={photo} alt="Box" />
            <div className="box__title text_7">{title}</div>
            <div className="box__descr text_6">{desc}</div> 
            <div className="box__btn">
            <CircleButton />
            </div>
        </div>
    )
}

export default BoxItem;
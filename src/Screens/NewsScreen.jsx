import React from 'react';
import {News} from '../Components/News';

export const NewsScreen = () =>{
    return (
        <div className="news">
            <div className="news__content container">
                <div className="news__title text_tertiary ">Аниме новости</div>
                <div className="news__japan text_quaternary">アニメニュース</div>
                <News main={true}/>
                <div className="news__subtitle text_tertiary">Последние</div>
                <News main={false} />
            </div>
        </div> 
    )
}
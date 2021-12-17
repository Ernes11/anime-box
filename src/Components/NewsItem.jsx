import React from "react";
import {Link} from 'react-router-dom';
import examplePhoto from "../assets/images/newsExample.png";
import { CircleButton } from "../UI/CircleButton";

export const NewsItem = ({ version = "1", photo, date }) => {
  return (
    <div className={`news__item ${version === "3" && "laid"}`}>
      {version !== "2" && (
        <div className="news__item-header">
          <div className="news__item-photo">
            <img src={photo ?? examplePhoto} alt="" />
          </div>
          {version !== 3 && (
            <div className="news__item-date text_5 ">
              {date ?? `14 ноября 2012 года`}
            </div>
          )}
        </div>
      )}
      <div className="news__item-content">
        <div className="news__item-title text_tertiary">
          Вышли новые серии Аниме Клинок Рассекающий демонов
        </div>
        <div className="news__item-descr text_5">
          <span>
            {(version !== '2' || version === '3')
              ? `      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione "Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione`
              : `""Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, "`}
          </span>
          {version !== "3" && (
            <Link to="/product">
              <CircleButton />
            </Link>
          )}
        </div>
      </div>
      {version == !"1" && (
        <div className="news__item-date text_5 ">
          {date ?? "14 ноября 2012 года"}
        </div>
      )}
    </div>
  );
};

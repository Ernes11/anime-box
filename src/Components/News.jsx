import React from "react";
import { NewsItem } from "./NewsItem";

export const News = ({ list, main }) => {
  return (
    <div className={`news ${main ? 'news__component' : 'screen'}`}>
      <div className="news__general">
        <NewsItem version={main ? '1' : '3'} />
      </div>
      <div className="news__list">
        <NewsItem version={main ? '2' : '3'} />
        <NewsItem version={main ? '2' : '3'}/>
        <NewsItem version={main ? '2' : '3'}/>
      </div>
    </div>
  );
};

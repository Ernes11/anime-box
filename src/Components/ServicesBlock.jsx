import React from "react";
import {Service} from './Service';

export const ServicesBlock = () => {
  return (
    <div className="services">
      <div className="services__inner">
        <div className="services__left">
            <Service />
        </div>
        <div className="services__right">
            <Service version='2'/>
            <div className="services__right-bottom">
                <Service version='3'/>
                <Service version='3'/>
            </div>
        </div>
      </div>
    </div>
  );
};

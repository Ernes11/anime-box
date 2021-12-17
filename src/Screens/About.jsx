import React from "react";
import about_history from "../assets/images/about_history-img.png";
import {Service} from '../Components/Service';
import {ServicesBlock} from '../Components/ServicesBlock';


export const About = () => {
  return (
    <div className="about">
      <div className="about__bg">
        <div className="about__bg-title text_primary ">О нас</div>
      </div>
      <div className="container">
      <div className="about__title text_7">История</div>
      <div className="about__history-top">
        <div className="about__history-descr mw-546 text_tertiary">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione "Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione
        </div>
        <div className="about__history-img">
          <img src={about_history} alt="" />
        </div>
      </div>
      <div className="about__history-bottom">
        <div className="about__history-descr text_tertiary">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione "Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione
        </div>
      </div>
      <ServicesBlock/>
      </div>
    </div>
  );
};

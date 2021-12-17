import React from "react";
import { CircleButton } from "../UI/CircleButton";

export const Service = ({ version = "1" }) => {
  return (
    <div
      className={`service ${
        version == "2"
          ? "service_medium"
          : version == "3"
          ? "service_small"
          : null
      }`}
      style={{
        backgroundImage:
          "url(https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg)",
      }}
    >
      <div className="service__title text_tertiary">Анибоксы</div>
      {version == "1" && (
        <div className="service__inner">
          <div className="service__descr text_6">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione "Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione{" "}
          </div>
          <div className="service__btn">
            <CircleButton type="white" />
          </div>
        </div>
      )}
    </div>
  );
};

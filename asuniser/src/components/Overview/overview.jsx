import React from 'react'
import "./index.css"
import { useTranslation } from 'react-i18next';
import Wave from "./../../assets/sound-waves.png"
import Protection from "./../../assets/protection.png"
import Low from "./../../assets/battery-indicator.png"
import Disortion from "./../../assets/disortion.webp"
import Noise from "./../../assets/noise.png"
import Energy from "./../../assets/energy.png"

const Overview = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="overview">
      <div className="topp">
        <div className="titlee">
          <h1>{t("About the Product")}</h1>
        </div>
        <div className="descr">
          <h1>{t("Description")}</h1>
        </div>
      </div>
      <div className="bott">
        <div className="prduct">
          <img src={Wave} alt="asdad" />
          <h1>{t("func1")}</h1>
        </div>
        <div className="prduct">
          <img src={Protection} alt="" />
          <h1>{t("func2")}</h1>
        </div>
        <div className="prduct">
          <img src={Low} alt="" />
          <h1>{t("func3")}</h1>
        </div>
        <div className="prduct">
          <img src={Disortion} alt="" />
          <h1>{t("func4")}</h1>
        </div>
        <div className="prduct">
          <img src={Noise} alt="" />
          <h1>{t("func5")}</h1>
        </div>
        <div className="prduct">
          <img src={Energy} alt="" />
          <h1>{t("func6")}</h1>
        </div>
      </div>
    </div>
  )
}

export default Overview
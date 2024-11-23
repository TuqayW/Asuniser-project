import React from 'react'
import { useTranslation } from 'react-i18next';
import "./index.css"
import stabilizator from "./../../assets/stabilizator.jpg"

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="header">
      <div className="lefth">
        <div className="titlea">
          <h1>{t("title")}</h1>
        </div>
        <div className="subtitle">
          <h1>{t("subtitle")}</h1>
        </div>
        <div className="btn">
          <button>{t("calltoaction")}</button>
        </div>
      </div>
      <div className="righth">
        <div className="imga">
          <img src={stabilizator} alt="Stabilizer" />
          <p className="caption">{t("caption")}</p>
        </div>
      </div>
    </div>
  )
}

export default Header
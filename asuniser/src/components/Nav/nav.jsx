import React, { useEffect, useState } from 'react';
import asuniser from "./../../assets/asuniser_logo.svg";
import "./index.css";
import { MdOutlineAccountCircle, MdTranslate } from "react-icons/md";  // Import translate icon
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [isSelected, setIsSelected] = useState("2")
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const closeHamburger = () => {
    setIsHamburgerOpen(false);
  };

  const changeLanguage = () => {
    const newLng = i18n.language === 'az' ? 'ru' : 'az';
    i18n.changeLanguage(newLng);
  };
  const changeSelected = (e) => {
    if (isSelected) {
      document.getElementById(isSelected).classList.remove("Selected");
    }
    const newSelected = e.target.id;
    setIsSelected(newSelected);
    document.getElementById(newSelected).classList.add("Selected");
  }
  return (
    <div className={`navv ${scrolled ? 'scrolled' : ''}`}>
      <div className="leftnav">
        <div className="icon">
          <img src={asuniser} alt="Logo" />
        </div>
        <div className="text">
          <h1>AsUniSer</h1>
        </div>
      </div>
      <div className="rightnav">
        <div className="icons">
          <div className="translate ikoncon" onClick={changeLanguage}>
            <MdTranslate className="ikon" title="Change Language" />
          </div>
          <div className="account ikoncon" onClick={toggleModal}>
            <MdOutlineAccountCircle className="ikon" />
          </div>
          <div className="hamburger ikoncon" onClick={toggleHamburger}>
            <RxHamburgerMenu className="ikon" />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={toggleModal}>
              &times;
            </button>
            <div className="modal-content">
              <h2>{t('greeting')}</h2>
              <form className='formLS'>
                <input className='pl' type="email" placeholder="Email Address" />
                <input className='pl' type="password" placeholder="Password" />
                <div className="form-footer">
                  <label>
                    <input type="checkbox" />
                    {t('rememberme')}
                  </label>
                  <button type="submit" className="login-btn">{t('login')}</button>
                </div>
              </form>
              <a href="#" className="forgot-password">{t('forgotpass')}</a>
              <div className="line"></div>
              <button className="google-signin">
                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
                <h2>{t('signin')}</h2>
              </button>
            </div>
          </div>
        </div>
      )}

      {isHamburgerOpen && (
        <>
          <div className="overlay" onClick={closeHamburger}></div>
          <div className="side-menu">
            <ul>
              <li id='1' onClick={changeSelected}>{t("Main")}</li>
              <li id='2' onClick={changeSelected}>{t("alternate")}</li>
              <li id='3' onClick={changeSelected}>{t("Argo")}</li>
              <li id='4' onClick={changeSelected}>{t("Contact")}</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Nav;

import React, { useState } from 'react';
import asuniser from "../../../public/assets/asuniser_logo.svg";
import "./index.css";
import { IoSearch } from "react-icons/io5";
import { MdOutlineAccountCircle, MdTranslate } from "react-icons/md";  // Import translate icon
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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

  return (
    <div className='navv'>
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
          <div className="search ikoncon">
            <IoSearch className="ikon" />
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
              <button className="google-signin">
                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
                <h2>{t('signin')}</h2>
              </button>
              <form>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <div className="form-footer">
                  <label>
                    <input type="checkbox" />
                    {t('rememberme')}
                  </label>
                  <button type="submit" className="login-btn">{t('login')}</button>
                </div>
              </form>
              <a href="#" className="forgot-password">{t('forgotpass')}</a>
            </div>
          </div>
        </div>
      )}

      {isHamburgerOpen && (
        <>
          <div className="overlay" onClick={closeHamburger}></div>
          <div className="side-menu">
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
              <li>Option 5</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Nav;

import React, { useState } from "react";
import "./styles/social.css";
import luckVoltiaProfile from "../../../assets/luck.jpg";
import {
  MainSectionSocial,
  MainMenuSocial,
  MainMenuListSocial,
  MainMenuLinkSocial,
} from "./styles/social.js";
import { NavLink } from "react-router-dom";

const Social = () => {
  const [social, setSocial] = useState([
    {
      socialMedia: "🔴 Youtube",
      className: "main-menu__link--youtube",
      link: "https://www.youtube.com/channel/UCjBWKPHYM_azisD60cO87xA",
    },
    {
      socialMedia: "🐦 Twitter",
      className: "main-menu__link--youtube",
      link: "https://twitter.com/obipolare",
    },
    {
      socialMedia: "📸 Instagram",
      className: "main-menu__link--insta",
      link: "https://www.instagram.com/obipolare/",
    },
    {
      socialMedia: "💜 Twitch",
      className: "main-menu__link--twitch",
      link: "https://www.twitch.tv/obipolare",
    },
    {
      socialMedia: "🌑 Github",
      className: "main-menu__link--github",
      link: "https://github.com/obipolare",
    },
    {
      socialMedia: "☄️ Telegram",
      className: "main-menu__link--telegram",
      link: "https://t.me/Obipolare",
    },
  ]);

  return (
    <MainSectionSocial>
      <figure className="main-figure">
        <img
          className="main-figure__img"
          src={luckVoltiaProfile}
          alt="Luck voltia"
        />
      </figure>
      <h1 className="main-username">@obipolare 🍀</h1>
      <MainMenuSocial>
        <MainMenuListSocial>
          <NavLink to="/" className="main-menu__link--web">
            📰 Visita mi Sitio WEB
          </NavLink>
        </MainMenuListSocial>
        {social.map(({ socialMedia, className, link }) => {
          return (
            <MainMenuListSocial>
              <MainMenuLinkSocial
                target="_blank"
                className={className}
                href={link}
              >
                {socialMedia}
              </MainMenuLinkSocial>
            </MainMenuListSocial>
          );
        })}
      </MainMenuSocial>
    </MainSectionSocial>
  );
};

export default Social;

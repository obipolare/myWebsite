import React, { useState } from "react";
import { HomeSocialMedia, HomeBoxIcon } from "./styles/home";
import "./styles/home.css";

const Home = () => {
  const [videoSlide, setvideoSlide] = useState([
    {
      url: "https://www.youtube.com/embed/xrjNlFUAeDY",
      id: "video-1",
    },
    {
      url: "https://www.youtube.com/embed/EvWKuubUTko",
      id: "video-2",
    },
    {
      url: "https://www.youtube.com/embed/GkxCBwHXk4I",
      id: "video-3",
    },
  ]);
  return (
    <section className="main-container__section">
      <section className="main-title">
        <h2 className="main-title__subtitle">Welcome Home!</h2>
        <div className="line" />
        <div>
          <p className="main-title__paragraph">We've been waiting for you!</p>
          <p className="main-title__paragraph">
            ¡Hola! Mi nombre es <strong>Obipolare</strong> 🍀 actualmente estoy
            enfocado en el mundo del desarrollo web con React, Vue, JavaScript,
            entre otros 💚.
          </p>
          {/* <br /> */}
          {/* <p className="main-title__paragraph">
             Me gusta ver peliculas, series y anime, 
          </p> */}
          <br />
          <p className="main-title__paragraph">
            Si queréis saber más sobre mí, podéis hacer un tour(aún esta web
            está en desarollo) por esta web o seguirme por las redes sociales
            que dejo aquí bajo 👇👇
            <a
              className="miree"
              target="_blank"
              href="https://youtu.be/nH8Z7H1j-Yg"
            >
              A Song 🎵
            </a>
          </p>
        </div>
        <HomeSocialMedia>
          <HomeBoxIcon
            target="_blank"
            href="https://www.instagram.com/obipolare/"
          >
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
            >
              <path
                d="M11 3.5h1M4.5.5h6a4 4 0 014 4v6a4 4 0 01-4 4h-6a4 4 0 01-4-4v-6a4 4 0 014-4zm3 10a3 3 0 110-6 3 3 0 010 6z"
                stroke="currentColor"
              ></path>
            </svg>
          </HomeBoxIcon>

          <HomeBoxIcon target="_blank" href="https://twitter.com/obipolare">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
            >
              <path
                d="M14.478 1.5l.5-.033a.5.5 0 00-.871-.301l.371.334zm-.498 2.959a.5.5 0 10-1 0h1zm-6.49.082h-.5.5zm0 .959h.5-.5zm-6.99 7V12a.5.5 0 00-.278.916L.5 12.5zm.998-11l.469-.175a.5.5 0 00-.916-.048l.447.223zm3.994 9l.354.353a.5.5 0 00-.195-.827l-.159.474zm7.224-8.027l-.37.336.18.199.265-.04-.075-.495zm1.264-.94c.051.778.003 1.25-.123 1.606-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388.193-.546.232-1.178.177-2.006l-.998.066zm0 3.654V4.46h-1v.728h1zm-6.99-.646V5.5h1v-.959h-1zm0 .959V6h1v-.5h-1zM10.525 1a3.539 3.539 0 00-3.537 3.541h1A2.539 2.539 0 0110.526 2V1zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1zM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29-.612-1.393-.523-3.11.427-5.013l-.895-.446zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706zm7.949-8.009A3.445 3.445 0 0010.526 1v1c.721 0 1.37.311 1.82.809l.74-.671zm-.296.83a3.513 3.513 0 002.06-1.134l-.744-.668a2.514 2.514 0 01-1.466.813l.15.989zM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832z"
                fill="currentColor"
              ></path>
            </svg>
          </HomeBoxIcon>
          <HomeBoxIcon target="_blank" href="https://t.me/Obipolare">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
            >
              <path
                d="M14.5 1.5l-14 5 4 2 6-4-4 5 6 4 2-12z"
                stroke="currentColor"
                stroke-linejoin="round"
              ></path>
            </svg>
          </HomeBoxIcon>
        </HomeSocialMedia>
      </section>
      <section className="slider">
        <scroll-container id="slider-container">
          {videoSlide.map(({ id, url }) => {
            return (
              <scroll-page id={id}>
                <iframe
                  width="560"
                  height="315"
                  className="video"
                  src={url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </scroll-page>
            );
          })}
        </scroll-container>
        <div className="slider-bullet-list">
          <a href="#video-1" className="slider-bullet" />
          <a href="#video-2" className="slider-bullet" />
          <a href="#video-3" className="slider-bullet" />
        </div>
      </section>
    </section>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import {
  MainTitleAbout,
  MainParagraphAbout,
  FigureAbout,
} from "./styles/about";

const About = () => {
  const [gif, setGif] = useState({});
  const getGif = async () => {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=Tgk3m9g3lF2HZVQztaVvytmkSJiGiTSF`
    );
    const { data } = await res.json();
    setGif(data);
  };
  useEffect(() => {
    getGif();
  }, []);
  return (
    <>
      <MainTitleAbout>This is About</MainTitleAbout>
      <MainParagraphAbout>
        Imagine a world where world is not world!
      </MainParagraphAbout>
      <MainParagraphAbout>
        please!, no os vayáis a ofender por los gifs 👋
      </MainParagraphAbout>
      <FigureAbout>
        <img src={gif.image_url} alt={gif.title} />
      </FigureAbout>
      <hr />
    </>
  );
};

export default About;

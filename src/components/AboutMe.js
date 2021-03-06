import React from "react";

const AboutMe = () => {
  return (
    <section className="container--flex">
      <div className="about-me">
        <div className="about-me__left">
          <img
            className="about-me__img"
            src={`${process.env.PUBLIC_URL}/Dinh.jpg`}
            alt="Dinh in Vungtau city"
          />
        </div>
        <div className="about-me__right">
          <h1 className="about-me__header mb-05">About me</h1>
          <p className="paragraph">
            My name is Dinh Q. Le. I was a YouTuber and video editor. After we
            got the YouTube Gold Play button, I decided to change my career
            path. I become a developer so I can make many beautiful products
            that people enjoy.
          </p>
          <button
            className="btn mt-1"
            onClick={() =>
              window.open(
                `https://drive.google.com/file/d/1iO-OV1picITWNHz835TvYKC3N9YdT4df/view`,
                "_blank"
              )
            }
          >
            <span class="material-icons">description</span>CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

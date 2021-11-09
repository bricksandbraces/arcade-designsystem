import React from "react";
import Logo from "../../../src/components/Logo/Logo";
import Headline from "../../../src/components/Typography/Headline";
import Body from "../../../src/components/Typography/Body";
import IntroBackground from "../../public/intro.png";

const Intro = () => {
  return (
    <div
      className="sb-intro--container"
      style={{
        backgroundImage: `linear-gradient(135deg,rgba(13, 13, 13, 100%),rgba(13, 13, 13, 0%)),url(${IntroBackground})`
      }}
    >
      <div className="sb-intro">
        <Logo type="logomark" size="xsmall" color="white" />
        <Headline type="h1" className="sb-intro--headline">
          Design System
        </Headline>
        <Body type="body-02" className="sb-intro--subline">
          v.0.0.1 React Storybook
        </Body>
      </div>
    </div>
  );
};

export default Intro;

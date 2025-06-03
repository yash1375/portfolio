import { Col, Row } from "antd";
import HomeIcon from "../assets/Home.svg";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { useState, useEffect, useContext } from "react";
import ScreenContext from "../state/ScreenContext";

const headlines = [
  "Frontend Developer ",
  "UI/UX Explorer ",
  "Full Stack Builder ",
];

function typeEffect(ListTexts: Array<string>, speed = 70) {
  const [displaytext, SetDisplaytext] = useState('');

  useEffect(() => {
    let i = 0;
    let helper = 1;
    let listIndex = 0;

    const interval = setInterval(() => {
      SetDisplaytext(ListTexts[listIndex].slice(0, i));
      i = i + helper;

      if (i > ListTexts[listIndex].length) {
        helper = -1;
        i = ListTexts[listIndex].length;
      }

      if (i < 0) {
        helper = 1;
        i = 0;
        listIndex = (listIndex + 1) % ListTexts.length;
      }
    }, speed);

    return () => clearInterval(interval);
  }, [ListTexts, speed]);

  return displaytext;
}

export default function Home() {
  const text = typeEffect(headlines);

  return (
    <Row
      style={{ height: 'calc(100vh - 65px)', width:"min(1280px,100vw)", margin: "auto", overflow: "hidden", padding: "1rem" }}
      align="middle"
      justify="center"
    >
      <Col xs={24} md={12} style={{ padding: "1rem" }}>
        <Title level={1}>Hi, I'm Abhinav 👋</Title>
        <Title level={2} style={{ minHeight: "3rem" }}>
          {text}
          <span style={{ animation: "blink 1s infinite" }}>|</span>
        </Title>
        <Text style={{ display: 'block', marginTop: '1rem' }}>
          I turn ideas into interactive experiences. From sleek interfaces to scalable backends —
          I bring digital products to life with a mix of design sense and dev muscle.
        </Text>
      </Col>

      <Col xs={24} md={12} style={{ textAlign: "center", padding: "1rem" }}>
        <img
          src={HomeIcon}
          style={{ width: "80%", maxWidth: "400px", height: "auto" }}
          alt="Programmer"
        />
      </Col>
    </Row>
  );
}

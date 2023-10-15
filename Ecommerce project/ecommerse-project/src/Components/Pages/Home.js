import React from "react";
import { Button, Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Container
        fluid
        className="max-w-full text-center "
        style={{
          backgroundColor: "rgb(149,123,190)",
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          fontSize: "50px",
        }}
      >
        Welcome to React-Mart
      </Container>
      <div
        style={{
          width: "100%",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <h3>Tours</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            margin: "20px",
            borderBottom: "2px solid",
            padding: "10px",
          }}
        >
          <span>JUL16</span>
          <span>DETROIT, MI</span>
          <span>DTE ENERGY MUSIC THEATRE</span>
          <Button variant="primary">Buy tickets</Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            margin: "20px",
            borderBottom: "2px solid",
            padding: "10px",
          }}
        >
          <span>JUL19</span>
          <span>TORONTO,ON</span>
          <span>BUDWEISER STAGE</span>
          <Button variant="primary">Buy tickets</Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            margin: "20px",
            borderBottom: "2px solid",
            padding: "10px",
          }}
        >
          <span>JUL 22</span>
          <span>BRISTOW, VA</span>
          <span>JIGGY LUBE LIVE</span>
          <Button variant="primary">Buy tickets</Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            margin: "20px",
            borderBottom: "2px solid",
            padding: "10px",
          }}
        >
          <span>JUL 29</span>
          <span>PHOENIX, AZ</span>
          <span>AK-CHIN PAVILION</span>
          <Button variant="primary">Buy tickets</Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            margin: "20px",
            borderBottom: "2px solid",
            padding: "10px",
          }}
        >
          <span>AUG 2</span>
          <span>LAS VEGAS, NV</span>
          <span>T-MOBILE ARENA</span>
          <Button variant="primary">Buy tickets</Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            margin: "20px",
            borderBottom: "2px solid",
            padding: "10px",
          }}
        >
          <span>AUG 7</span>
          <span>CONCORD, CA</span>
          <span>CONCORD PAVILION</span>
          <Button variant="primary">Buy tickets</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

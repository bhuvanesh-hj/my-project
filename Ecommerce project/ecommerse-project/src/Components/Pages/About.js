import React from "react";

const About = () => {
  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "monospace",
          marginTop:20
        }}
      >
        About
      </h1>
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <img
          style={{ width: 200, height: 200, borderRadius: "50%" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz_2SEEv9YQJTwj3UbbWi-w3V9uVEsR_7EiQ&usqp=CAU"
          alt="error in loading"
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <br />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </div>
  );
};

export default About;

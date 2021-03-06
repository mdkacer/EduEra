import React from "react";

import Box from "@material-ui/core/Box";

import fb from "../../img/icons/facebook.png";
import gmail from "../../img/icons/gmail.png";
import github from "../../img/icons/github.png";

import "./footer.css";

export default function Footer(props) {
  const pos = props.position;

  // const [year, setyear] = useState();

  console.log(pos);
  return (
    <div className="container ">
      <div className="footer">
        <div className="footeritem">
          <a href="/">
            <img src={fb} alt="facebook logo"></img>
          </a>
        </div>
        <div className="footeritem">
          <a href="/">
            <img src={github} alt="github logo"></img>
          </a>
        </div>

        <div className="footeritem">
          <a href="/">
            <img src={gmail} alt="github logo"></img>
          </a>
        </div>
        <Box
          display={{ xs: "none", md: "block" }}
          className="footerspacer"
        ></Box>
        <div className="footeritemlogo">
          <a className="link" href="/">
            Terms
          </a>
          <div className="footeritem">
            © {new Date().getFullYear()} EduEra LLC{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
   <div
      id="contact"
      style={{
        backgroundColor: "#383838",
        textAlign: "center",
        color: "whitesmoke",
        width: "100%",
        bottom: 0,
        position: `${pos}`,
      }}
    >
      <div
        style={{
          textAlign: "center",
          paddingBottom: "20px",
          paddingTop: "20px",
        }}
      >
        <IconButton aria-label="More info">
          <img src={gmail} />
        </IconButton>
        <IconButton aria-label="More info">
          <img src={twitter} />
        </IconButton>
        <IconButton aria-label="More info">
          <img src={instagram} />
        </IconButton>
        <IconButton aria-label="More info">
          <img src={github} />
        </IconButton>
        <IconButton aria-label="More info">
          <img src={fb} />
        </IconButton>
      </div>
      <div style={{ paddingBottom: "50px" }}>
        <img src={logo} />
      </div>
    </div>
 */

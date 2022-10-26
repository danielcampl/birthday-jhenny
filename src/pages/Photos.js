import React from "react";
import { Link } from "react-router-dom";

import photo1 from "../images/jhenny1.png";
import photo2 from "../images/jhenny2.png";
import photo3 from "../images/jhenny3.png";
import photo4 from "../images/jhenny4.png";
import photo5 from "../images/jhenny5.png";
import photo6 from "../images/jhenny6.png";
import photo7 from "../images/jhenny7.png";
import photo8 from "../images/jhenny8.png";
import photo9 from "../images/jhenny9.png";
import photo10 from "../images/jhenny10.png";
import photo11 from "../images/jhenny11.png";
import photo12 from "../images/jhenny12.png";
import photo13 from "../images/jhenny13.png";
import photo14 from "../images/jhenny14.png";
import photo15 from "../images/jhenny15.png";
import photo16 from "../images/jhenny16.png";
import photo17 from "../images/jhenny17.png";
import photo18 from "../images/jhenny18.png";
import photo19 from "../images/jhenny19.png";
import photo20 from "../images/jhenny20.png";
import photo21 from "../images/jhenny21.png";
import photo22 from "../images/jhenny22.png";
import photo23 from "../images/jhenny23.png";

import "./Photos.css";

export default function Photos() {
  return (
    <div className="photos">
      <ul>
        <li>
          <img src={photo1} alt="#" />
        </li>
        <li>
          <img src={photo2} alt="#" />
        </li>
        <li>
          <img src={photo3} alt="#" />
        </li>
        <li>
          <img src={photo4} alt="#" />
        </li>
        <li>
          <img src={photo5} alt="#" />
        </li>
        <li>
          <img src={photo6} alt="#" />
        </li>
        <li>
          <img src={photo7} alt="#" />
        </li>
        <li>
          <img src={photo8} alt="#" />
        </li>
        <li>
          <img src={photo9} alt="#" />
        </li>
        <li>
          <img src={photo10} alt="#" />
        </li>
        <li>
          <img src={photo11} alt="#" />
        </li>
        <li>
          <img src={photo12} alt="#" />
        </li>
        <li>
          <img src={photo13} alt="#" />
        </li>
        <li>
          <img src={photo14} alt="#" />
        </li>
        <li>
          <img src={photo15} alt="#" />
        </li>
        <li>
          <img src={photo16} alt="#" />
        </li>
        <li>
          <img src={photo17} alt="#" />
        </li>
        <li>
          <img src={photo18} alt="#" />
        </li>
        <li>
          <img src={photo19} alt="#" />
        </li>
        <li>
          <img src={photo20} alt="#" />
        </li>
        <li>
          <img src={photo21} alt="#" />
        </li>
        <li>
          <img src={photo22} alt="#" />
        </li>
        <li>
          <img src={photo23} alt="#" />
        </li>
      </ul>
      <div className="btn">
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </div>
    </div>
  );
}

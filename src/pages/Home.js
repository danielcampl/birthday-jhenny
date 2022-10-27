import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div>
        <div class="card">
          <div class="outside">
            <div class="front">
              <p>Parabéns (Mudinha 14218)</p>
              <div class="cake">
                <div class="top-layer"></div>
                <div class="middle-layer"></div>
                <div class="bottom-layer"></div>
                <div class="candle"></div>
              </div>
            </div>
            <div class="back"></div>
          </div>
          <div class="inside">
            <p>Apenas uma lembrança de bons momentos. Desejamos parabéns para você.</p>
            <h3>Com Amor:</h3>
            <p>Daniel (Silva 16264)</p>
            <p>Khimi (Khimi 15912)</p>
            <h2>&#127873;</h2>
          </div>
        </div>
      </div>
      <div className="home-btn">
        <Link to="/photos">
          <button>Veja nossas fotos</button>
        </Link>
      </div>
    </div>
  );
}

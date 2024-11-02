import React, { useState } from "react";

import { Header } from "../components/Header";
import { STATES } from "../states";

import location from "../images/happiness.png";

export const Location = () => {
  return (
    <div className="home-container">
      <Header />

      <div className="content">
        <div className="housing-image">
            <img src={location} alt="Where will you be happy." />
        </div>
      </div>
    </div>
  );
};

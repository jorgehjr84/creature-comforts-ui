import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

import { Header } from "../components/Header";

export const Home = () => {
  return (
    <div className="home-container">
      <Header />

      <div className="continue-button">
        <Link to={"/cost-breakdown"} type="primary">
          <Button type="primary">Continue</Button>
        </Link>
      </div>
    </div>
  );
};

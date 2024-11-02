import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "antd";

import { Header } from "../components/Header";
import { STATES } from "../states";

export const Home = () => {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateChange = (state) => {
    setSelectedState(state.label);
  };

  const items = STATES.map((item) => {
    return {
      key: item.key,
      label: <p onClick={() => handleStateChange(item)}>{item.label}</p>,
    };
  });
  return (
    <div className="home-container">
      <Header />

      <div className="content">
        <Dropdown menu={{ items }} placement="bottomLeft">
          <Button style={{ width: "200px" }}>
            {selectedState ? selectedState : "Select your state"}
          </Button>
        </Dropdown>
        <div className="continue-button">
          <Link to={"/cost-breakdown"} type="primary">
            <Button type="primary">Continue</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

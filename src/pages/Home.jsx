import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Slider } from "antd";

import { Header } from "../components/Header";
import { STATES } from "../states";

export const Home = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedTemp, setSelectedTemp] = useState([20, 50]);

  const handleStateChange = (state) => {
    setSelectedState(state.label);
  };

  const handleTempChange = (value) => {
    setSelectedTemp(value);
  };

  const filteredStates = STATES.filter((state) => {
    const minTemp = selectedTemp[0];
    const maxTemp = selectedTemp[1];

    return state.avgTemp >= minTemp && state.avgTemp <= maxTemp;
  });

  const items = filteredStates.map((item) => {
    return {
      key: item.key,
      label: <p onClick={() => handleStateChange(item)}>{item.label}</p>,
    };
  });

  const marks = {
    0: "0 °F",
    100: {
      style: {
        color: "#f50",
      },
      label: <strong>100 °F</strong>,
    },
  };

  const dropdownTitle = () => {
    console.log("selectedState", selectedState);
    if (selectedState) return selectedState;
    if (items.length === 0) return "No states found in that temperature range";

    return "Select your state";
  };

  return (
    <div className="home-container">
      <Header />

      <div className="content">
        <Slider
          range
          step={10}
          defaultValue={[20, 50]}
          onChange={handleTempChange}
          marks={marks}
          style={{
            width: "80%",
          }}
        />

        <Dropdown menu={{ items }} placement="bottomLeft">
          <Button style={{ width: "325px", marginTop: "20px" }}>
            {dropdownTitle()}
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, ExportOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import boxabl from "../images/boxabl.png";
import yurt from "../images/yurt.png";
import dome from "../images/dome.png";

import { HOUSING_TYPES } from "../housingTypes";

export const CostBreakdown = () => {
  const [housingType, setHousingType] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleHousingTypeChange = (item) => {
    setHousingType(item);

    if (item.key === "boxabl") {
      setSelectedImage(boxabl);
    } else if (item.key === "yurt") {
      setSelectedImage(yurt);
    } else if (item.key === "dome") {
      setSelectedImage(dome);
    } else {
      return item.imgUrl;
    }
  };

  const items = HOUSING_TYPES.map((item) => {
    return {
      key: item.key,
      label: <p onClick={() => handleHousingTypeChange(item)}>{item.label}</p>,
    };
  });

  const formatCurrency = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className="cost-breakdown-container">
      <div className="header">
        <Link to={"/"} type="primary">
          <Button>
            <ArrowLeftOutlined /> Back
          </Button>
        </Link>
      </div>
      <div className="content">
        <Dropdown menu={{ items }} placement="bottomLeft">
          <Button style={{ width: "200px" }}>
            {housingType ? housingType.label : "Select your housing type"}
          </Button>
        </Dropdown>

        {housingType && (
          <>
            <div className="housing-info-container">
              <h2>
                {housingType.label}
                <a href={housingType.link} target="_blank" rel="noreferrer">
                  <ExportOutlined
                    className="housing-vendor-link"
                    style={{
                      width: "0.75rem",
                      marginLeft: "0.75rem",
                    }}
                  />
                </a>
              </h2>
              <p>Average cost: {formatCurrency(housingType.averageCost)}</p>
              <div className="housing-image">
                <img src={selectedImage} alt={housingType} />
              </div>
              <div className="totals-container">
                <span>Land Cost: {formatCurrency(400000)}</span>
                <span>
                  Average Housing Cost:{" "}
                  {formatCurrency(housingType.averageCost)}
                </span>
                <span>Foundation Costs: {formatCurrency(10000)}</span>
                <span>
                  Total:{" "}
                  {formatCurrency(400000 + housingType.averageCost + 10000)}
                </span>
              </div>
            </div>
          </>
        )}
        <div className="continue-button">
          <Link to={"/location"} type="primary">
            <Button type="primary">Continue</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

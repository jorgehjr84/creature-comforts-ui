import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { Button } from "antd";

export const CostBreakdown = () => {
  return (
    <div className="cost-breakdown-container">
      <div className="header">
        <Link to={"/"} type="primary">
          <Button>
            <ArrowLeftOutlined /> Back
          </Button>
        </Link>
      </div>
      <h1>Cost Breakdown</h1>
    </div>
  );
};

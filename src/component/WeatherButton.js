import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = () => {
  return (
    <div>
      <div className="button">
        <Button variant="warning">Seoul</Button>
        <Button variant="warning">Vancouver</Button>
        <Button variant="warning">Toronto</Button>
      </div>
    </div>
  );
};

export default WeatherButton;

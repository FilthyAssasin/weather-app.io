import React from "react";
import { Card, Container } from "react-bootstrap";
import "D:/react Project/weather-app/src/components/CityWeather/style.css";

const CityWeather = ({ cityWeather, city }) => {
  return (
    <center>
      <Card style={{ marginTop: "5%", width: "25rem", height: "16rem" }}>
        <Card.Body className="abc">
          <Card.Title style={{ color: "white" }}>Weather in {city}</Card.Title>
          <Card.Subtitle className="mb-2 text-warning">
            temp: {Math.floor(cityWeather.temp - 273)}C
          </Card.Subtitle>
          <Card.Text className="text-white">
            <br></br>
            <span style={{ fontWeight: "bold" }}>feels like: </span>{" "}
            {Math.floor(cityWeather.feels_like - 273)}C<br></br>
            <span style={{ fontWeight: "bold" }}>humidity:</span>{" "}
            {cityWeather.humidity}%
          </Card.Text>
        </Card.Body>
      </Card>
    </center>
  );
};

export default CityWeather;

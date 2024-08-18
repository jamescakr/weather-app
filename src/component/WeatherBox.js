import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("weather???", weather);
  const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  return (
    <div className="weather-box">
      {/* optional chaining : 객체의 속성이나 메소드의 존재여부 확인하고 >> 존재할경우 잘 동작하고, 존재하지 않을경우 undefined 를 반환한다. useState를 쓴 weather의 경우 초기값이 null이니 값이 존재하므로 문제없이 작동하게 된다 */}
      <div>{weather?.name}</div>
      <h2>
        {weather?.main.temp.toFixed(0)}C /{" "}
        {toFahrenheit(weather?.main.temp.toFixed(0))}F
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;

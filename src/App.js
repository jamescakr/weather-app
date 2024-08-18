import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

//추가사항1 : 날씨에 따라 배경화면이 달라짐 - 같은장소의 배경이지만 날씨에 따라 날씨 또는 계절이 바뀐 배경을 보여줌
//추가사항2 : 날씨 버튼을 클릭하면 해당 날씨에 따른 버튼 효과음과 그에맞는 클래식 음악이 나옴

//1. 앱실행 >> 현 위치 기반의 날씨가 보임
//2. 날씨 정보 >> 도시, 섭씨, 화씨 상태
//3. 5개 버튼 >> 현재위치, 도시별 날씨
//4. 도시별 날씨 클릭 >> 도시별 날씨가 나옴
//5. 현재위치 버튼 >> 현재 위치의 날씨가 나옴
//6. 버퍼링 >> 로딩 스피너 기능

const weatherAPI = "93e8720799e366ff0d24a0e5982dddeb";

function App() {
  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPI}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;

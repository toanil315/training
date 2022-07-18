import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ForecastSmallItem from "../../components/ForecastSmallItem/ForecastSmallItem";
import {
  useLazyGetLocationQuery,
  useLazyGetWeatherQuery,
} from "../../services/weatherServices";
import { Container } from "../Container";
import moment from "moment";
import { getImageLink, mapOfIconWeather } from "../../utils/common";
import {
  useAddHistoryMutation,
  useGetHistoryListQuery,
  useUpdateHistoryMutation,
} from "../../services/historyServices";
import LoadingGif from '../../assets/imgs/loading-ring.gif'

interface CurrentPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}

function Home() {
  const { location } = useParams();
  const [triggerGetLocation, { data: dataLocation, isLoading: isLoadingLocation, isFetching: isFetchingLocation }] =
    useLazyGetLocationQuery();
  const [
    triggerGetWeather,
    { data: dataWeather, isLoading: isLoadingWeather, isFetching: isFetchingWeather },
  ] = useLazyGetWeatherQuery();
  const [addHistory] = useAddHistoryMutation();
  const { data: dataHistory, isLoading, isFetching } = useGetHistoryListQuery();
  const [updateHistory] = useUpdateHistoryMutation();

  useEffect(() => {
    console.log("render");
    function success(pos: CurrentPosition) {
      const { latitude: lat, longitude: lon } = pos.coords;
      triggerGetWeather({ lat, lon }, true);
    }

    function error(err: any) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    const getWeatherWithLocation = async (location: string) => {
      const resultLocation = await triggerGetLocation(location, true).unwrap();
      const resultWeather = await triggerGetWeather(
        {
          lat: resultLocation[0].lat,
          lon: resultLocation[0].lon,
        },
        true
      ).unwrap();
      //after get weather complete => add or update history
      const existHistory = dataHistory?.find(
        (history) => history.location.name === resultLocation[0].name
      );
      if (!existHistory) {
        console.log("add")
        addHistory({
          id: Date.now(),
          location: resultLocation[0],
          temp: resultWeather.current.temp,
          description: resultWeather.current.weather[0].description,
          icon: resultWeather.current.weather[0].icon,
        });
      } else {
        console.log("update")
        updateHistory({
          ...existHistory,
          temp: resultWeather.current.temp,
          description: resultWeather.current.weather[0].description,
          icon: resultWeather.current.weather[0].icon,
        });
      }
    };

    if (location) {
      //get weather with location
      getWeatherWithLocation(location);
    } else {
      //get weather of current location
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  }, [location]);

  const renderHourlyForecast = () => {
    return dataWeather?.hourly.slice(1, 7).map((weather, index) => {
      return (
        <ForecastSmallItem
          key={weather.dt}
          imageLink={mapOfIconWeather[weather.weather[0].icon]}
          hour={moment(weather.dt * 1000).format("DD/MM HH:mm")}
          content={`${Math.round(weather.temp)}°`}
        />
      );
    });
  };

  console.log('location: ', isLoadingLocation)
  console.log('weather: ', isLoadingWeather)


  return (
    <HomeContainer>
      {(isLoadingLocation || isLoadingWeather) && (
        <LoadingContainer>
          <img
            src={LoadingGif}
            alt="loading"
          />
        </LoadingContainer>
      )}
      <h1 className="title">
        {location ? dataLocation && dataLocation[0].name : "My Country"}
      </h1>
      <p className="desciption">
        {moment(
          dataWeather?.current.dt ? dataWeather?.current.dt * 1000 : Date.now()
        ).format("MMMM DD, YYYY")}
      </p>
      <img
        src={getImageLink(dataWeather?.current.weather[0].icon)}
        alt="weather-icon"
      />
      <span>{dataWeather?.current.weather[0].description}</span>
      <ul className="weather-info">
        <li>
          <span>Temp</span>
          <p>{Math.round(Number(dataWeather?.current.temp))}°</p>
        </li>
        <li>
          <span>Wind</span>
          <p>{dataWeather?.current.wind_speed}m/s</p>
        </li>
        <li>
          <span>Humidity</span>
          <p>{dataWeather?.current.humidity}%</p>
        </li>
      </ul>
      <div className="hourly-forecast">
        <h2>Hourly forecast</h2>
        <ul>{renderHourlyForecast()}</ul>
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled(Container)`
  position: relative;
  & > img {
    display: block;
    margin-top: 20px;
    object-fit: cover;
    width: 180px;
  }

  & > span {
    display: block;
    margin: 10px 0 20px;
    color: white;
  }

  .weather-info {
    list-style-type: none;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    & > li {
      text-align: center;
      & > span {
        font-size: 13px;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.5);
      }
      & > p {
        font-size: 18px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
  .hourly-forecast {
    width: 100%;
    margin-bottom: 80px;
    & > h2 {
      text-align: center;
      font-size: 20px;
      font-weight: 500;
      color: white;
      letter-spacing: 0.6px;
      margin-bottom: 10px;
    }
    & > ul {
      display: flex;
      flex-flow: row nowrap;
      list-style-type: none;
      width: calc(100% + 15px);
      margin-right: -15px;
      overflow-x: auto;
      padding-bottom: 10px;

      &::-webkit-scrollbar {
        padding-top: 10px;
        height: 4px;
      }

      &::-webkit-scrollbar-track {
        border-radius: 100vh;
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: radial-gradient(
          73.23% 106% at 34.94% 108.33%,
          #f7cbfd 0%,
          #7758d1 100%
        );
        border-radius: 100vh;
      }
    }
  }
`;

const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    display: block;
    width: 120px;
  }
`;

export default Home;

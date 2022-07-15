import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ForecastSmallItem from '../../components/ForecastSmallItem/ForecastSmallItem'
import { useLazyGetLocationQuery, useLazyGetWeatherQuery } from '../../services/weatherServices'
import { Container } from '../Container'
import moment from 'moment'
import { mapOfIconWeather } from '../../utils/common'

interface CurrentPosition {
  coords: {
    latitude: number;
    longitude: number;
  }
}

function Home() {
  const {location} = useParams()
  const [triggerGetLocation, {data: dataLocation}] = useLazyGetLocationQuery();
  const [triggerGetWeather, {data: dataWeather}] = useLazyGetWeatherQuery();

  useEffect(() => {
    function success(pos: CurrentPosition) {
      const {latitude: lat, longitude: lon} = pos.coords;
      triggerGetWeather({lat, lon}, true);
    }
    
    function error(err: any) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    if(location) {
      //get weather of search country
      console.log(dataLocation)
    }
    else {
      //get weather of current location
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  }, [])

  const renderHourlyForecast = () => {
    return dataWeather?.hourly.slice(1, 7).map((weather, index) => {
      return <ForecastSmallItem key={weather.dt} imageLink={mapOfIconWeather[weather.weather[0].icon]} hour={moment(weather.dt * 1000).format("DD/MM HH:mm")} content={`${Math.round(weather.temp)}°`} />
    })
  }

  return (
    <HomeContainer>
      <h1 className='title'>{dataLocation ? dataLocation.name : "My Country"}</h1>
      <p className='desciption'>{moment(dataWeather?.current.dt ? dataWeather?.current.dt * 1000 : Date.now()).format('MMMM DD, YYYY')}</p>
      <img src={mapOfIconWeather[dataWeather ? dataWeather?.current.weather[0].icon : '01d']} alt='weather-icon' />
      <span>{dataWeather?.current.weather[0].description}</span>
      <ul className='weather-info'>
        <li>
          <span>Temp</span>
          <p>{dataWeather?.current.temp}°</p>
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
      <div className='hourly-forecast'>
        <h2>Hourly forecast</h2>
        <ul>
          {renderHourlyForecast()}
        </ul>
      </div>
    </HomeContainer>
  )
}

const HomeContainer = styled(Container)`
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
            background: radial-gradient(73.23% 106% at 34.94% 108.33%, #F7CBFD 0%, #7758D1 100%);
            border-radius: 100vh;
        }
      }
  }
`

export default Home
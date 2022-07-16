import React from 'react'
import styled from 'styled-components'
import { getImageLink, mapOfIconWeather } from '../../utils/common'
import { History } from '../../utils/type'
import { SmallItemContainer } from '../ForecastSmallItem/ForecastSmallItem'
import {Link} from 'react-router-dom'

interface Props {
    item: History
}

function HistoryItem({item} : Props) {
  return (
    <Link to={`/${item.location.name}`}>
        <HistoryItemContainer>
            <img src={getImageLink(item.icon)} alt="weather-icon" />
            <div className='content'>
                <p className='temp'>{item.temp}°</p>
                <span className='description'>{item.description}</span>
                <h4>{item.location.name}</h4>
            </div>
        </HistoryItemContainer>
    </Link>
  )
}

const HistoryItemContainer = styled(SmallItemContainer)`
    .content {
        .temp {
            margin-bottom: 0;
            font-size: 14px;
        }
        h4 {
            color: white;
            font-size: 16px;
            font-weight: 500;
        }
    }
`

export default HistoryItem
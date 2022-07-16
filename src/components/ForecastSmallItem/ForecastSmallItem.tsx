import { Content } from 'antd/lib/layout/layout';
import React from 'react'
import styled from 'styled-components'

interface Props {
    imageLink: string;
    hour?: string;
    content: string;
}

function ForecastSmallItem({imageLink, hour, content}: Props) {
  return (
    <SmallItemContainer>
        <img src={imageLink} alt="weather-icon" />
        <div className='content'>
          <span>{hour ? hour : ""}</span>
          <p>{content}</p>
        </div>
    </SmallItemContainer>
  )
}

export const SmallItemContainer = styled.li`
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: center;
    padding: 5px 10px 0;
    border-radius: 8px;
    background: radial-gradient(73.23% 106% at 34.94% 108.33%, #F7CBFD 0%, #7758D1 100%);
    margin-right: 15px;

    & > img {
      width: 60px;
      margin-right: 10px;
    }
    .content {
      span {
        font-size: 12px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.8);
      }
      p {
        font-size: 18px;
        font-weight: 700;
        color: white;
      }
    }
`

export default ForecastSmallItem
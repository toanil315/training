import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GameWithTrailer } from "../../utils/type";

interface Props {
  game: GameWithTrailer;
}

function GameItem({ game }: Props) {
  const findHighestRating = () => {
    let max = 0;
    let indexMax = 0;
    game.ratings.forEach((rating, index) => {
      if (max < rating.count) {
        indexMax = index;
        max = rating.count;
      }
    });

    return game.ratings[indexMax];
  };

  return (
    <GameContainer>
      <div className="header">
        <img src={game.background_image} alt={game.background_image} />
      </div>
      <div className="content">
        <div className="title">
          <h3>{game.name}</h3>
          <span className="rating">{findHighestRating().title}</span>
        </div>
        <span className="added">
          <i className="fa fa-plus"></i>
          {game.added}
        </span>
        <ul className="more-info">
          <li>
            <span>Release Date:</span>
            <span>{game.released}</span>
          </li>
          <li>
            <span>Genres:</span>
            <span>
              {
                game.genres.map((genre, index) => {
                  return <Link key={genre.id} to={`/${genre.slug}`}>{genre.name} {index !== game.genres.length - 1 ? "," : ""}</Link>
                })
              }
            </span>
          </li>
          <button className="show-more">Show more <i className="fa fa-chevron-right"></i></button>
        </ul>
      </div>
    </GameContainer>
  );
}

const GameContainer = styled.div`
  width: calc(33.33% - 40px);
  margin-left: 40px;
  margin-bottom: 20px;
  background-color: #292929;
  border-radius: 15px; 
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.01);
    z-index: 10;
    .content {
      .more-info {
        opacity: 1;
        visibility: visible;
        pointer-events: unset;
      }
    }
  }
  .header {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    overflow: hidden;
    img {
      display: block;
      height: 165px;
      width: 100%;
      object-fit: cover;
    }
  }
  .content {
    padding: 15px 10px 25px;
    .title {
      height: 63px;
      overflow: hidden;
      h3 {
        display: inline;
        font-size: 20px;
        font-weight: 700;
        color: white;
      }
      & > .rating {
          font-size: 12px;
          font-weight: 500;
          color: white;
          padding: 3px 8px;
          background-color: #d33939;
          border-radius: 10px;
          margin-left: 10px;
        }
    }
    .added {
      margin-top: 20px;
      display: inline-block;
      font-size: 12px;
      color: white;
      padding: 2px 10px;
      background-color: #505050;
      border-radius: 4px;

      & > i {
        font-size: 14px;
        color: white;
        padding-right: 5px;
      }
    }
    .more-info {
      position: absolute;
      top: 95%;
      left: 0;
      z-index: 10;

      width: 100%;
      padding: 20px 10px;  
      background-color: #292929;
      border-radius: 8px;

      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: all 0.1s ease-in;
      li {
        width: 100%;
        padding: 12px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #7a7a7a;

        font-size: 12px;
        color: #7a7a7a;
        & > span:last-child {
          color: white;
          padding-left: 4px;

          & > a {
            color: white;
            padding-left: 4px;
          }
        }
      }

      .show-more {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 8px 16px;
        background-color: #515151;
        color: white;
        border: 0;
        border-radius: 8px;
        outline: none;
        margin-top: 20px;
        cursor: pointer;
      }
    }
  }
`;

export default GameItem;

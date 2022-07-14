import { render } from '@testing-library/react';
import React, {memo} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import { GameWithTrailer } from '../../utils/type'
import GameItem from '../GameItem/GameItem';

interface Props {
    listGame?: GameWithTrailer[];
}

function GameList({listGame} : Props) {
    console.log(listGame)
    const renderGameList = () => {
        if(!!listGame) {
            return listGame.map((game, index) => {
                return <GameItem game={game} key={game.id} />
            })
        }
    }
  return (
    <GameListContainer>
        {renderGameList()}
    </GameListContainer>
  )
}

const GameListContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: calc(100% + 40px);
    margin-left: -40px;
    margin-bottom: 200px;
`

export default memo(GameList)
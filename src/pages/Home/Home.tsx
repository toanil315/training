import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useGetGameListQuery } from '../../services/GamesServices'
import LoadingGif from '../../assets/imgs/loading.gif'
import GameList from '../../components/GameList/GameList'
import InfiniteScroll from 'react-infinite-scroll-component';


function Home() {
    const [page, setPage] = useState<number>(1)
    const {data, isLoading, isError, isFetching} = useGetGameListQuery({
        pageSize: 12,
        page
    })    

    useEffect(() => {
        const handleLoadmore = () => {
            // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            //     // you're at the bottom of the page
            //     console.log("bottom")
            // }
            console.log(window.scrollY);
            console.log(window.innerHeight);
            console.log(window.outerHeight);
            // console.log(window.screenY)
            console.log(document.documentElement.scrollTop)
        }

        window.addEventListener('scroll', handleLoadmore)

        return () => {
            window.removeEventListener('scroll', handleLoadmore)
        }
    }, [])

  return (
    <HomeContainer>
        {/* <InfiniteScroll
          dataLength={list.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
        </InfiniteScroll> */}
        <GameList listGame={data?.results} />
        {
            isFetching ? <div className='loading'>
                <img  src={LoadingGif} alt="loading..." />
            </div> : null
        }
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
    width: 100%;
    .loading {
        width: 100%;
        img {
            display: block;
            width: 80px;
            margin: 20px auto;
        }
    }
`

export default Home
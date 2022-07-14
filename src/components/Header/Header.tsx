import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useLazyGetSearchListQuery } from '../../services/GamesServices';
import LoadingGif from '../../assets/imgs/loading.gif'

function Header() {
    const [searchInp, setSearchInp] = useState<string>("")
    const [triggerSearch, {isFetching ,data: dataSearchResult}] = useLazyGetSearchListQuery()
    const searchDebounceRef = useRef< ReturnType<typeof setTimeout> | null>(null);
    
    const handleSearchGameList = async (searchValue: string) => {
        setSearchInp(searchValue)
        if(searchDebounceRef.current) {
            clearTimeout(searchDebounceRef.current)
        }
        searchDebounceRef.current = setTimeout(() => {
            triggerSearch({
                searchStr: searchInp
            })
        }, 500)
    }

    const renderSearchResult = () : React.ReactNode => {
        if(!isFetching && dataSearchResult?.results) {
            return dataSearchResult?.results.map((gameItem, index) => {
                return <SearchItem key={gameItem?.id}>
                    <div className='game-bg'>
                        <div className='overlay'></div>
                        <img src={gameItem.background_image} alt={gameItem.background_image} />
                    </div>
                    <div className='content'>
                        <h4>{gameItem.name}</h4>
                        <p>{gameItem.released}</p>
                    </div>
                </SearchItem>
            });
        }
        return <div className='loading'>
            <img src={LoadingGif} alt="loading" />
        </div>
    }

  return (
    <HeaderContainer>
        <span className='logo'>RAWG</span>
        <form className='search-field'>
            <div>
                <i className="fa fa-search"></i>
                <input autoComplete='off' value={searchInp} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearchGameList(e.target.value)} type='text' name="search" placeholder='Search something...' />
                {
                    !!searchInp && <ul className='search-result'>
                        {renderSearchResult()}
                    </ul>
                }
            </div>
        </form>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`    
    max-width: 1200px;
    margin: auto;
    padding: 30px 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
        color: #e1dede;
        font-size: 18px;
        font-weight: 800;
        letter-spacing: 3px;
    }

    .search-field {
        width: 80%;
        & > div {
            position: relative;
            padding: 12px 15px;
            background-color: #3e3d3d;
            font-size: 16px;
            border-radius: 30px;
            display: flex;
            align-items: center;
            color: #e8e8e8;

            transition: all 0.2s linear;
            &:focus-within {
                background-color: #e8e8e8;
                color: #222222;
            }

            input {
                background-color: transparent;
                border: 0;
                width: 100%;
                font-size: 16px;
                font-weight: 600;
                padding: 0 15px;
                &:focus {
                    outline: none;
                    background-color: transparent;
                }
            }

            .search-result {
                position: absolute;
                top: 70px;
                left: 0;
                z-index: 5;

                width: 100%;
                padding: 20px;
                border-radius: 20px;
                background-color: #121212;

                .loading {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        background-color: transparent;
                        width: 100px;
                    }
                }
            }
        }
    }
`;

const SearchItem = styled.li`
    text-decoration: none;
    display: flex;
    align-items: center;

    margin-bottom: 20px;

    .game-bg {
        position: relative;
        img {
            display: block;
            width: 55px;
            height: 55px;
            border-radius: 10px;
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0, 0.5);
            opacity: 0;
            visibility: hidden;

            transition: all 0.2s ease-in;
            &:hover {
                opacity: 1;
                visibility: visible;
            }
        }
    }

    .content {
        padding-left: 15px;
        cursor: default;
        h4 {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 5px;
            color: white;
            transition: all 0.2s ease-in;
            &:hover {
                color: #585858;
            }
        }

        p {
            font-size: 14px;
            color: white;
            margin-bottom: 0;
        }
    }
`

export default Header
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SmallItemContainer } from "../../components/ForecastSmallItem/ForecastSmallItem";
import Form from "../../components/Form/Form";
import Input from "../../components/Form/Input";
import HistoryItem from "../../components/HistoryItem/HistoryItem";
import { useGetHistoryListQuery } from "../../services/historyServices";
import { useLazyGetLocationQuery } from "../../services/weatherServices";
import { Container } from "../Container";

function Search() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [triggerGetLocation, { data: dataLocation, isFetching: isFetchingLocation }] =
    useLazyGetLocationQuery();
  const { data: dataHistory, isLoading, isFetching } = useGetHistoryListQuery();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const value = await triggerGetLocation(searchValue).unwrap();
    if (value.length > 0) {
      navigate(`/${searchValue}`);
    } else {
      setIsError(true);
    }
  };

  const renderHistoryList = () => {
    return dataHistory?.map((history, index) => {
      return <HistoryItem item={history} key={history.id} />;
    });
  };

  return (
    <SearchContainer>
      <h1 className="title">Pick Locations</h1>
      <p className="desciption">
        Find the area or city that you want to know the detail weather info at
        this time
      </p>
      <Form onSubmit={handleSubmit}>
        <Input
          isLoading={isFetchingLocation}
          value={searchValue}
          onChange={handleChange}
          Icon={<i className="fa-solid fa-magnifying-glass"></i>}
          placeholder="Search"
        />
        <button>
          <i className="fa-solid fa-location-dot"></i>
        </button>
      </Form>
      {isError && (
        <ErrorNotify>*Country name or City name is invalid!</ErrorNotify>
      )}
      <HistoryList>{renderHistoryList()}</HistoryList>
    </SearchContainer>
  );
}

const SearchContainer = styled(Container)`

`;

const ErrorNotify = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  padding: 5px 0;
`;

const HistoryList = styled.ul`
  width: 100%;
  margin: 20px 0;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  max-height: 50vh;
  overflow-y: auto;
  padding-bottom: 40px;

  & li {
    margin-bottom: 15px;
  }
  &::-webkit-scrollbar {
    padding-top: 10px;
    width: 4px;
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
`;

export default Search;

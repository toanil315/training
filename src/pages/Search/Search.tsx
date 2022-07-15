import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Form from '../../components/Form/Form'
import Input from '../../components/Form/Input'
import { useLazyGetLocationQuery } from '../../services/weatherServices'
import { Container } from '../Container'

function Search() {
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState<string>("")
    const [triggerGetLocation, {data: dataLocation}] = useLazyGetLocationQuery();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        await triggerGetLocation(searchValue)
        navigate(`/${searchValue}`)
    }

  return (
    <SearchContainer>
         <h1 className='title'>Pick Locations</h1>
        <p className='desciption'>Find the area or city that you want to know the detail weather info at this time</p>
        <Form onSubmit={handleSubmit}>
            <Input value={searchValue} onChange={handleChange} Icon={<i className="fa-solid fa-magnifying-glass"></i>} placeholder="Search" />
            <button>
                <i className="fa-solid fa-location-dot"></i>
            </button>
        </Form>
    </SearchContainer>
  )
}

const SearchContainer = styled(Container)`
`

export default Search
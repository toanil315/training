import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 40px;
    & > .title {
        font-size: 26px;
        font-weight: 500;
        color: white;
        letter-spacing: 0.8px;
        margin-bottom: 5px;
    }
    & > .desciption {
        color: rgba(255, 255, 255, 0.6);
        font-weight: 400;
        text-align: center;
    }
`
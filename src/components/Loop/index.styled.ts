import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #152238;
    display: flex;
    flex-direction: column;
`

export const ButtonContainer = styled.div`
    display: flex;
    position: relative;
    top: 30px;
    width: 100%;
    height: 60px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    padding-right: 30px;
    & :nth-child(2) {
        margin-left: 20px;
    };
`
export const Button = styled.button`
    background-color: #24A0ED;
    height: 40px;
    width: 60px; 
    border-radius: 7px;
    color: white;
    white-space: normal;
    word-wrap: break-word;
    &:active {
        background-color: #28a745;
        color: white;
    }
`
export const CountContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`

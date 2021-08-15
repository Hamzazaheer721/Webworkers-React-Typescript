import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #152238;
`

export const ButtonContainer = styled.div`
    display: flex;
    position: relative;
    top: 10px;
    width: 100%;
    height: 60px;
    padding: 5px;
    & :nth-child(2) {
        margin-left: 200px;
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
`

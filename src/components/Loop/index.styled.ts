import styled from 'styled-components'

interface IButtonProps {
    toggleButton? : boolean | undefined
}

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
    justify-content: flex-start;
`
export const Button = styled.button<IButtonProps>`
    background-color: #24A0ED;
    height: 40px;
    width: ${({ toggleButton }) => (toggleButton ? '120px' : '70px')}; 
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
    flex: 0.3;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
`
export const Heading = styled.h1`
    color: white;
    font-weight: lighter;
`
export const StateHeading = styled.h1`
    color: white;
    font-style: italic;
    margin: 0 10px 0 10px;
`

export const IncrementButtonsContainer = styled.div`
    display: flex;
    flex: 0.6;
    width: 100%;
    height: 60px;
    padding: 5px;
    align-items: center;
    padding-left: 30px;
    & :nth-child(2) {
        margin-left: 10px;
    };
`

export const ToggleButtonContainer = styled.div`
    flex: 0.4;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const SmallHeading = styled.h4`
    margin-left: 20px;
    color: white;
    font-weight: light;
`

export const ModHeading = styled.h4`
    margin-left: 10px;
    color: white;
    font-weight: lighter;
`

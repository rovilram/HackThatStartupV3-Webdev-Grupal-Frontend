
import styled from 'styled-components';


export const MainContainer = styled.div`
    background-color: var(--tertiary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 90vh;
    width: 100%;
    @media all and (min-width: 960px) {
        height:100vh;
        position:absolute;
        top: 0;
        right: 0;
        width: 81%;
    }
`

export const MainWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`

export const MainTitle = styled.h1`
    color: rgba(0,0,0,0.7);
    width: auto;
    text-align: center;
    margin-bottom: 2rem;
    height: auto;
    font-size: 1.8rem;
 
    @media all and (min-width: 960px) {
        width:${(props)=> props.limitedWidth ? props.limitedWidth : null};
        font-size: 2.5rem;
    }

`

export const MainInputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputBox = styled.div`
    margin-bottom: .6rem;
`

export const Input = styled.input`
    color: var(--primary-color);
    width: 18rem;
    padding: .6rem;
    border-radius: 2rem;
    outline: none;
    border: 2px solid var(--primary-color);
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 1.2rem;
    cursor: pointer;

    &::placeholder {
        font-style: italic;
        font-size: 1rem;
        opacity: .4;
    }

    
`

export const MainBtn = styled.button`
    background-color: var(--primary-color);
    border:  none;
    padding: 1rem 2rem;
    border-radius: 2rem;
    cursor: pointer;
    color: #FFFFFF;
    font-size: 1.5rem;
`

export const BtnSearch = styled.button`
    background: none;
    border: 1px solid  var(--primary-color);
    padding: .2rem 1rem;
    border-radius: 2rem;
    cursor: pointer;
    color: var(--primary-color);
    font-size: 2rem;
`
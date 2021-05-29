
import styled from 'styled-components';


export const MainContainer = styled.div`
    background-color: var(--tertiary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    height: 90vh;
`

export const MainWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
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
    color: var(--tertiary-color);
    width: 15rem;
    padding: .6rem;
    border-radius: 2rem;
    outline: none;
    border: 2px solid var(--white);
    font-size: 1.2rem;
    text-align: center;
    

    &::placeholder {
        font-style: italic;
        font-size: 1rem;
        opacity: .4;
    }

    
`

export const MainBtn = styled.div`
    
`

export const BtnSearch = styled.button`
    background: none;
    border: 1px solid var(--white);
    padding: .2rem 1rem;
    border-radius: 2rem;
    cursor: pointer;
    color: var(--white);
`
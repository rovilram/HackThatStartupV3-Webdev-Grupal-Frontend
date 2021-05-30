import styled from 'styled-components';


export const TeamContainer = styled.form`
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TeamWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    background: lightblue;
`

export const TeamTitle = styled.h1`
    color: var(--tertiary-color);
    padding: 2rem 0;
    text-align: center;
    text-transform: uppercase;

    @media screen and (min-width: 960px) {
        padding: 4rem;
    }
`

export const InputFieldBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;

    @media screen and (min-width: 960px) {
        flex-direction: row;
        justify-content: center;
        padding: 6rem 0;
    }
    
`

export const InputTitle = styled.h3`
    margin-bottom: 1.2rem;

    @media screen and (min-width: 960px) {
        margin-right: 3rem;
        font-size: 1.4rem;
    }
`

export const Input = styled.input`
    color: var(--tertiary-color);
    width: 100%;
    padding: .6rem;
    border-radius: 2rem;
    outline: none;
    border: 2px solid var(--tertiary-color);
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 1.2rem;
    align-self: center;
    @media all and (min-width: 960px) {
        width:15rem;
    }

    &::placeholder {
        font-style: italic;
        font-size: 1rem;
        opacity: .4;
    }
`

export const InputUrl = styled.input`
    color: var(--tertiary-color);
    min-width: 25rem;
    padding: .6rem;
    border-radius: 2rem;
    outline: none;
    border: 2px solid var(--tertiary-color);
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 1.2rem;
    

    &::placeholder {
        font-style: italic;
        font-size: 1rem;
        opacity: .4;
    }
`

export const InputTextArea = styled.textarea`
    width: 80%;
    min-height: 8rem;
    outline: none;
    padding: 1rem;
    resize: none;
`

export const BtnAdd = styled.button`
    margin-left: 1rem;
    background: none;
    border: 1px solid black;
    padding: .2rem 1rem;
    border-radius: 2rem;
`

export const InputBtnBox = styled.div`

`

export const UserBox = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
`

export const UserName = styled.h3`
    color: var(--tertiary-color);
`

export const BtnDeleteUser = styled.button`
    margin-left: 1rem;
    background: none;
    border: 1px solid black;
    padding: .2rem 1rem;
    border-radius: 2rem;
`


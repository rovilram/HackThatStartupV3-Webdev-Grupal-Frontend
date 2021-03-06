import styled from 'styled-components';


export const TeamContainer = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 60rem;
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
    align-items: flex-start;
    justify-content: center;
    padding: 1rem 0;    
`

export const InputTitle = styled.p`
    margin-bottom: 1.2rem;
    color: rgba(0,0,0,0.7);
    font-size: 1.4rem;
    @media screen and (min-width: 960px) { 
        margin-right: 3rem;
        font-size: 1.4rem;
    }
`

export const Input = styled.input`
    color: rgba(0,0,0,0.7);
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 2rem;
    outline: none;
    border: none;
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 1.2rem;
    align-self: center;
    @media all and (min-width: 960px) {
        width:15rem;
        align-self: ${(props)=> props.isLogin ? 'center' : 'flex-start'} ;
    }

    &::placeholder {
        font-style: italic;
        font-size: 1rem;
        opacity: .4;
    }
`

export const InputTextArea = styled.textarea`
    width: 100%;
    min-height: 8rem;
    padding: 1rem 2rem;
    border-radius: 2rem;
    outline: none;
    border: none;
    resize: none;


    &::placeholder {
        font-style: italic;
        font-size: 1rem;
        opacity: .4;
    }
`

export const BtnAdd = styled.button`
    margin-left: 1rem;
    background: none;
    border: 1px solid black;
    padding: .2rem 1rem;
    border-radius: 2rem;
`

export const InputBtnBox = styled.div`
    width: 100%;
    @media all and (min-width: 960px) {
        width: auto;
        display: flex;
    }
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


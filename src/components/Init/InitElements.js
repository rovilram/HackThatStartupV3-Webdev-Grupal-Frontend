import styled from 'styled-components';

export const InitContainer = styled.div`
    height: 100vh;
    background-color: lightblue;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

`

export const InitWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`

export const InitHeader = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InitTitle = styled.h1`

`
export const InitMain = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const InputBox = styled.form`
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const BtnInitBox = styled.div`
    display: flex;
    justify-content: center;
`

export const ErrorMsg = styled.p`
    height: 2rem;
    color: crimson;
`

export const SignupAdvice = styled.div`
    text-align: center;
`
export const Advice = styled.p`
    color: green;

    & span {
        border: 1px solid #fff;
        padding: .4rem 1rem;
        border-radius: 2rem;
        margin: 0 .2rem;
    }
`


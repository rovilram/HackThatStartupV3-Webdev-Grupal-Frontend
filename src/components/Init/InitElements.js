import styled from 'styled-components';

export const InitContainer = styled.div`
    height: 100vh;
    background-color:  var(--tertiary-color);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

`

export const InitWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`

export const InitMain = styled.div`
    height: auto;
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
    color: rgba(0,0,0,0.7);

    & span {
        border: 1px solid var(--secondary-color);
        padding: .4rem 1rem;
        border-radius: 2rem;
        margin: 0 .2rem;
    }
`


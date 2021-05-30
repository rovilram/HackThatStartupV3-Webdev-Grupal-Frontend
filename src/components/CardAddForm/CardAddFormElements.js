import styled from 'styled-components';

export const FormWrapper = styled.div`
    @media all and (min-width: 960px) {
        display: flex;
    }
`;
export const InputsWrapper = styled.div`
    @media all and (min-width: 960px) {
        display: flex;
    }
`;

export const Btn = styled.button`
    margin-top: 2rem;
    background-color:  var(--secondary-color);
    border: none;
    padding: .2rem 1rem;
    border-radius: 2rem;
    cursor: pointer;
    color: var(--black);
    width: max-content;
    @media all and (min-width: 960px) {
        height:3rem;
    }
`;

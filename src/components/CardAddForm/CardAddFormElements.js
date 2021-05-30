import styled from 'styled-components';

export const FormWrapper = styled.div`
    margin: auto;

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
    margin-top: ${(props)=> props.notMarginTop ? null : '2rem'};
    background-color:  var(--complementary-color);
    border: none;
    padding: 1rem 3rem;
    border-radius: 2rem;
    cursor: pointer;
    color: var(--black);
    width: max-content;
    font-weight: 700;
    font-size: 1.2rem;
    @media all and (min-width: 960px) {
        height:max-content;
        margin-top: 0;
        margin-right: ${(props)=> props.marginRight ? props.marginRight : null}
    }
`;

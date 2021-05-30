import styled from 'styled-components';

export const CreditContentWrapper = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    @media all and (min-width: 960px) {
        flex-direction: row;
    }
`;

export const Btn = styled.button`
    margin-left: 2rem;
    height: 2rem;
    width: 2rem;
    background-color:  var(--secondary-color);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
`;

export const CreditCardBox = styled.div`
    background-color: ${(props)=> props.bgColor ? props.bgColor : 'var(--primary-color);'};
    border-radius: 1rem;
    width: 80vw;
    height: 40vw;
    display:flex;
    align-items:center;
    justify-content: center;
    
    @media all and (min-width: 960px) {
        width: 300px;
        height:150px;
    }
`;

export const CreditCardNumber = styled.div`
    font-size: 1.4rem;
    font-weight: 700;
    padding: 1.5rem 1.5rem 0;
    text-align: right;
    width: 100%;
    @media all and (min-width: 960px) {
        font-size: 1.5rem;
    }
`;
export const CreditsWrapper = styled.div`
    font-size: 1.4rem;
    font-weight: 700;
    padding: 1.5rem 1.5rem 0 0;
    text-align: right;
    width: 100%;
    @media all and (min-width: 960px) {
        padding: 1.5rem 1.5rem 0;
        font-size: 1.5rem;
    }
`;

export const CreditCardInfo = styled.div`
    font-size: 1rem;
    width: max-content;
`;
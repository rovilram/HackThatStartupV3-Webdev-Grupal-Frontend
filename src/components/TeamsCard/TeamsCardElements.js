import styled from 'styled-components';

export const CardBox = styled.div`
    border: 1px solid black;
    display:flex;
    flex-direction: column;
    align-items: flex-start;

    @media all and (min-width: 960px) {
        flex-direction: row;
    }
`;

export const ImageWrapper = styled.div`
    background-color: red;
    width: 150px;

`;
export const TeamContentWrapper = styled.div`
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const TeamName = styled.div`
    font-size: 24px;
    font-weight: 700;
`;

export const Btn = styled.button`
    background: none;
    border: 1px solid var(--black);
    padding: .2rem 1rem;
    border-radius: 2rem;
    cursor: pointer;
    color: var(--black);
`
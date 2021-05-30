import styled from 'styled-components';

export const CardBox = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    height: 350px;
    width: 100%;
    margin-bottom: 2rem;
    height: 100%;
    background-color: #FFFFFF;

    @media all and (min-width: 960px) {
        flex-direction: row;
        height: 18rem;
        align-items: center;
        margin: 0 2rem 4rem;
    }
    @media all and (min-width: 1480px) {
        max-width: 40rem;
    }
`;

export const ImageWrapper = styled.div`
    background-color: var(--secondary-color);
    width: 100%;
    height: 150px;
    overflow: hidden;

    @media all and (min-width: 960px) {
        background-color: red;
        width:20vw;
        overflow: hidden;
        height: 100%;
    }
    img {
        width: 100%;
        height: auto;
        @media all and (min-width: 960px) {
            width: auto;
            height: 100%;
            left: 50%;
            transform: translateX(-30%);
        }
        
    }

`;
export const TeamContentWrapper = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media all and (min-width: 960px) {
        
    }
`;
export const TeamName = styled.div`
    font-size: 2rem;
    font-weight: 700;
`;

export const Btn = styled.button`
    margin-top: 2rem;
    background-color:  var(--secondary-color);
    border: none;
    padding: .2rem 1rem;
    border-radius: 2rem;
    cursor: pointer;
    color: var(--black);
    width: max-content
`;
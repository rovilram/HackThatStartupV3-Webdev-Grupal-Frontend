import styled from 'styled-components';
import { ImageWrapper } from '../TeamsCard/TeamsCardElements';


export const DetailContainer = styled.div`
`

export const DetailWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`

export const DetailName = styled.h1`
    padding: 4rem 0;
    text-align: center;
`

export const DetailDescription = styled.p`
    color:var(--primary-color);
    text-align: center;
    font-size: 1.2rem;
    padding: 2rem 0;
    @media all and (min-width: 960px) {
        font-size: 1.8rem;
        max-width:60rem;
    }
`

export const DetailMembers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Member = styled.h3`
    color: lightcoral;
`

export const ImageDetailWrapper= styled.div`
    height: 300px;
    width: 300px;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
    margin: auto;
    img {
        width: 500px;
        height: auto;
    }
`;
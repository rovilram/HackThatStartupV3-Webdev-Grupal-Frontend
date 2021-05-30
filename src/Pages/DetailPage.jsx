import React from 'react';
import { Detail } from '../components/Detail/Detail';
import styled from 'styled-components';

const ContentWrapper = styled.section`
background-color: var(--tertiary-color);
padding: 2rem 2rem 2rem;
min-height: 100vh;

@media all and (min-width: 960px) {
    padding: 8rem 2rem 2rem;
    position: absolute;
    top: 0;
    right: 0;
    width: 82%;
    display: flex;
    align-items: center;
    justify-content: center;
}

`;

export const DetailPage = () => {
    return (
        <ContentWrapper>
            <Detail />
        </ContentWrapper>
    )
}

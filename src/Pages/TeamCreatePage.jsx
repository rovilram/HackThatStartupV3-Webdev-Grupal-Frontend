import React from 'react'
import { TeamCreate } from '../components/TeamCreate/TeamCreate';

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
    }
`;

export const TeamCreatePage = () => {
    
    
    return (
        < ContentWrapper >
            <TeamCreate />
        </ ContentWrapper >
    );

};

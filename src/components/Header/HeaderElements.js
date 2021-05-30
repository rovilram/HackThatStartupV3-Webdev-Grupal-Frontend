import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background-color: var(--primary-color);
    height: 10vh;
    display: flex;
    align-items: center;
`

export const HeaderWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`

export const Header = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 960px) {
        justify-content: center;
    }
`

export const HeaderLogoBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: ${(props)=> props.isSidebar ? '4rem' : null};

`
export const Logo = styled.h1`
    font-size: ${(props)=> props.isSidebar ? '3rem' : '2rem'};
    color: #FFFFFF;
    
`
export const MobileIconBox = styled.div`
    color: var(--white);
    font-size: 1.6rem;
    cursor: pointer;

    @media screen and (min-width: 960px) {
        display: none;
    }
`
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';



export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: flex;
    justify-content: center;
    align-items: center;
    
    transition: .2s ease-in-out;
    opacity: ${( {isOpen} ) => (isOpen ? '100%'  :  '0') };
    top: ${( { isOpen } ) => (isOpen ? '0'  :  '-100%') };

    @media screen and (min-width: 960px) {
        width: 20%;
        transition: none;
        opacity: 1;
        top: 0;
        left: 0;
        align-items: flex-start;
    }
`


export const CloseIcon = styled(FaTimes)`
    color: #fff;

    @media screen and (min-width: 960px) {
        display: none;
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    height: 30rem;
`

export const SidebarLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`


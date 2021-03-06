import React from 'react';
import { useHistory } from 'react-router';

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBarSubLink
} from './SidebarElements';
import { HeaderLogoBox, Logo } from '../Header/HeaderElements';
import {
    useWindowWidth,
  } from '@react-hook/window-size'

export const Sidebar = ({isOpen, toggle}) => {

    const width = useWindowWidth();

    let history = useHistory();

    const goToCreateTeam = () => history.push('/teampage')
    const goToManageTeam = () => history.push('/my_teams')
    const goToUserPage = () => history.push('/userpage')
    const goToUserCards = () => history.push('/usercards')
    const goToInit = () => history.push('/')
    const goToHome = () => history.push('/home')

    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle} >

                <Icon>
                    <CloseIcon />
                </Icon>

                <SidebarWrapper>

                    <HeaderLogoBox isSidebar>
                        <Logo isSidebar>Fake<span style={{color:'rgba(0,0,0, 0.7'}}>H</span>ub</Logo>
                    </HeaderLogoBox> 

                    <SidebarMenu>
                        <SidebarLink onClick={goToHome}> Home </SidebarLink>
                    </SidebarMenu>

                    <SidebarMenu>
                        <SidebarLink> Equipos </SidebarLink>
                        <SideBarSubLink onClick={goToCreateTeam}> Crea </SideBarSubLink>
                        <SideBarSubLink onClick={goToManageTeam}> Gestiona </SideBarSubLink>
                    </SidebarMenu>

                    <SidebarMenu>
                        <SidebarLink> Usuario </SidebarLink>
                        <SideBarSubLink onClick={goToUserCards}> Tus tarjetas </SideBarSubLink>
                        <SideBarSubLink onClick={goToUserPage}> Tu usuario </SideBarSubLink>
                    </SidebarMenu>

                    <SidebarMenu>
                        <SidebarLink onClick={goToInit}> Log out </SidebarLink>
                    </SidebarMenu>


                    

                </SidebarWrapper>

            </SidebarContainer>
            
        </>
    );

};
import React from 'react';

import {

    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink


} from './SidebarElements';

export const Sidebar = ({isOpen, toggle}) => {

    

    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle} >

                <Icon>
                    <CloseIcon />
                </Icon>

                <SidebarWrapper>

                    <SidebarMenu>

                        <SidebarLink> Equipos </SidebarLink>

                        <SidebarLink> Usuarios </SidebarLink>

                    </SidebarMenu>

                    

                </SidebarWrapper>

            </SidebarContainer>
            
        </>
    );

};
import React from 'react';
import { FaBars } from 'react-icons/fa';

import {

    HeaderContainer,
    HeaderWrapper,
    Header,
    HeaderLogoBox,
    Logo,
    MobileIconBox,

} from './HeaderElements';



export const HeaderMain = () => {


    return (
        <>
            <HeaderContainer>
                
                <HeaderWrapper>

                    <Header>

                        <HeaderLogoBox>
                            <Logo>FakeHub</Logo>
                        </HeaderLogoBox> 

                        <MobileIconBox>
                            <FaBars />
                        </MobileIconBox>

                    </Header>

                </HeaderWrapper>

            </HeaderContainer>
        </>
    )

}

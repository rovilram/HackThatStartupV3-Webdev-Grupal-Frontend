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



export const HeaderMain = ({toggle}) => {


    return (
        <>
            <HeaderContainer>
                
                <HeaderWrapper>

                    <Header>

                        <HeaderLogoBox>
                            <Logo>FakeHub</Logo>
                        </HeaderLogoBox> 

                        <MobileIconBox onClick={toggle}>
                            <FaBars />
                        </MobileIconBox>

                    </Header>

                </HeaderWrapper>

            </HeaderContainer>
        </>
    )

}

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
                            <Logo>Fake<span style={{color:'rgba(0,0,0, 0.7'}}>H</span>ub</Logo>
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

import React from 'react';

import {

    MainContainer,
    MainWrapper,
    MainInputBox,
    Input,
    MainBtn,
    BtnSearch

} from './MainElements';

export const Main = () => {


    return (
        <>
            <MainContainer>

                <MainWrapper>

                    <MainInputBox>
                    
                    <Input placeholder='Who are you in GitHub?'/>

                    <MainBtn>
                        <BtnSearch> Search </BtnSearch>
                    </MainBtn>

                    </MainInputBox>

                </MainWrapper>

            </MainContainer>
        </>
    )


}

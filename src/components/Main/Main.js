import React from 'react';

import {

    MainContainer

} from './MainElements';

export const Main = () => {


    return (
        <>
            <MainContainer>

                <MainWrapper>

                    <MainInputBox>
                        <Input />
                    </MainInputBox>

                    <MainBtn>
                        <BtnSearch>Search</BtnSearch>
                    </MainBtn>

                </MainWrapper>

            </MainContainer>
        </>
    )


}

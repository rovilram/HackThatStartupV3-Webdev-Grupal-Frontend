import React, { useState } from 'react';

import { useHistory } from 'react-router';

import {

    MainContainer,
    MainWrapper,
    MainInputBox,
    MainTitle,
    MainBtn

} from './MainElements';

export const Main = () => {

    

    // Referencia al useHistory
    let history = useHistory();
    
    const goToCreateTeam = () => history.push('/teampage')


    return (
        <>
            <MainContainer>

                <MainWrapper>

                    <MainInputBox>

                    <MainTitle limitedWidth='560px'> Busca, encuentra y selecciona a tus futuros compañeros de equipo </MainTitle>
                    <MainBtn onClick={goToCreateTeam}> Comienza </MainBtn>

                    </MainInputBox>

                </MainWrapper>

            </MainContainer>
        </>
    )


}

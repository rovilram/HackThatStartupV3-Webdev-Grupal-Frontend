import React, { useState, useEffect } from 'react';

import {
    Btn,
    CardBox,
    ImageWrapper,
    TeamName,
    TeamContentWrapper
} from './TeamsCardElements';


 export const TeamsCard = (props) => {
     const { teamName, teamDescription, teamImageUrl, teamDetailPage } = props;
     
    const handleClick = () => {
        console.log('me voy a la pagina de detalle del equipo')
    }

    return (
        <CardBox>
            <ImageWrapper>
                <img src={teamImageUrl} alt={teamImageUrl}/>
            </ImageWrapper>
            <TeamContentWrapper>
                <div>
                    <TeamName> {teamName} </TeamName>
                    <p>{teamDescription} </p>
                </div>
                <Btn
                    onClick={(e)=>{
                        e.preventDefault();
                        handleClick();
                    }}
                >
                    Ver más
                </Btn>
            </TeamContentWrapper>
        </CardBox>
    )
}

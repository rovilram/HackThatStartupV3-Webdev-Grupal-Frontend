import React from 'react';

import {DetailContainer,ImageDetailWrapper, DetailWrapper, DetailDescription, DetailMembers, Member} from './DetailElements';
import {MainTitle} from '../Main/MainElements';

const fakeData = {
    members: ['El Dani', 'El chino', 'El cuñao', 'Mari Carmen'],
    name: 'Los Manolos',
    description: 'Pues montamos un equipillo para programar todos los días y no programamos ni los lunes',
    imageUrl: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/09/como-conseguir-pikachu-gorra-pokemon-espada-escudo-2083655.jpg?itok=kziVIlM2',
}



export const Detail = () => {


    return (

        <DetailContainer>
            <DetailWrapper>
                <ImageDetailWrapper>
                    <img src={fakeData.imageUrl} alt={fakeData.imageUrl}/>
                </ImageDetailWrapper>
                <MainTitle> {fakeData.name} </MainTitle>
                <DetailDescription> {fakeData.description} </DetailDescription>

                <DetailMembers>
                    {fakeData.members.map( cur => <Member> {cur} </Member> )}
                </DetailMembers>

            </DetailWrapper>

        </DetailContainer>

    );

};

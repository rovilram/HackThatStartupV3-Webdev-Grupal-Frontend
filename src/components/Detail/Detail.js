import React from 'react';

import {DetailContainer, DetailName, DetailWrapper, DetailDescription, DetailMembers, Member} from './DetailElements';

const fakeData = {
    members: ['El Dani', 'El chino', 'El cuñao', 'Mari Carmen'],
    name: 'Los Manolos',
    description: 'Pues montamos un equipillo para programar todos los días y no programamos ni los lunes'
}


export const Detail = () => {


    return (
        <>
            <DetailContainer>

                <DetailWrapper>
                    <DetailName> {fakeData.name} </DetailName>
                    <DetailDescription> {fakeData.description} </DetailDescription>

                    <DetailMembers>
                        {fakeData.members.map( cur => <Member> {cur} </Member> )}
                    </DetailMembers>

                </DetailWrapper>

            </DetailContainer>
        </>
    );

};

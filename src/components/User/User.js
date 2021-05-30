import React from 'react';
import {ImPencil} from 'react-icons/im';
import {AiOutlineCloseCircle} from 'react-icons/ai';

import { FieldBox, Text, UserContainer, Field, Teams, TeamsBox, Wrapper } from './UserElements';


const fakeData = {
    name: 'Maikel Nait',
    mail: 'maikelnait@io.com',
    github: 'ershulito13',
    avatar: 'Avatar de github',
    teams: ['los manporreros', 'cuñaos', 'solteros con salero']
}

export const User = () => {


    return (
        <>
            <UserContainer>

                <FieldBox>
                    <Text> Nombre de usuario </Text>
                    <Wrapper>
                        <Field> {fakeData.name} </Field>
                        <ImPencil />
                    </Wrapper>

                </FieldBox>

                <FieldBox>
                    <Text> Nombre de usuario </Text>
                    <Wrapper>
                        <Field> {fakeData.mail} </Field>
                        <ImPencil />
                    </Wrapper>

                </FieldBox>
                
                <FieldBox>
                    <Text> Nombre de usuario </Text>
                    <Wrapper>
                        <Field> {fakeData.github} </Field>
                        <ImPencil />
                    </Wrapper>

                </FieldBox>

                <FieldBox>
                    <Text> Nombre de usuario </Text>
                    <Field> {fakeData.avatar} </Field>
                </FieldBox>

                <FieldBox>
                    <Text> Equipos </Text>

                    { fakeData.teams.map( cur => {
                        return (

                            <>
                                <TeamsBox>
                                    <Teams> {cur} </Teams>
                                    <AiOutlineCloseCircle color='red' fontSize='1.2rem' />
                                </TeamsBox>

                            </>
                        )

                    }) }

                </FieldBox>

               
            </UserContainer>
        </>
    )
}


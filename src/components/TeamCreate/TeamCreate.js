
import React, { useState } from 'react';

import {

    TeamContainer,
    TeamWrapper,
    InputFieldBox,
    InputTitle,
    Input,
    InputTextArea,
    InputUrl,
    TeamTitle,
    BtnAdd,
    InputBtnBox,
    UserBox,
    UserName,
    BtnDeleteUser

} from './TeamCreateElements';




export const TeamCreate = () => {

    const [user, setUser] = useState({user: ''} );

    const handleInputValue = (e) => setUser({user: e.target.value} );

    const handleAddUser = (e) => {
        e.preventDefault();
        
    };

    return (
        <>

            <TeamContainer>

                <TeamWrapper>

                    <TeamTitle> Crea tu equipo </TeamTitle>

                    <InputFieldBox> 
                        <InputTitle> Nombre </InputTitle>
                        <Input />
                    </InputFieldBox>

                    <InputFieldBox> 
                        <InputTitle> Descripción </InputTitle>
                        <InputTextArea maxLength='250' />
                    </InputFieldBox>

                    <InputFieldBox> 
                        <InputTitle> Url </InputTitle>
                        <InputUrl placeholder='https://github.com/ChrisDevMode' />
                    </InputFieldBox>

                    <InputFieldBox> 

                        <InputTitle> Usuarios </InputTitle>

                        <InputBtnBox>
                            <Input onChange={handleInputValue}/>
                            <BtnAdd onClick={handleAddUser}> Añadir </BtnAdd>
                        </InputBtnBox>

                    </InputFieldBox>

                    <UserBox>
                        <UserName> Maikel </UserName>
                        <BtnDeleteUser> Quitar </BtnDeleteUser>
                    </UserBox>

                </TeamWrapper>

            </TeamContainer>
            

        </>
    );

};


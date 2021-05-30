
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

    // Enviar la petición a la API de GitHub
    const handleFetch = async (e) => {

        e.preventDefault();
        const response = await fetch(`https://api.github.com/users/${user.user}/repos`);
        const data = await response.json();
        console.log(data);
        
    }

    return (
        <>

            <TeamContainer onSubmit={handleFetch}>

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
                            <BtnAdd> Añadir </BtnAdd>
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

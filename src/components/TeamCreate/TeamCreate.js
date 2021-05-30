
import { useState, useEffect } from 'react';
import axios from 'axios';
import to from 'await-to-js';

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

    const [userSearch, setUserSearch] = useState('');
    const [validProfile, setValidProfile] = useState([]);
    const [formData, setFormData] = useState({
        members: validProfile
    });

    const renderMembers = (member) => {
        return (<span >
            <img style={{ width: "75px", height: "75px", borderRadius: "50%", margin: "0px 5px" }} src={member.avatar_url} />
        </span>)
    }

    // Enviar la petición a la API de GitHub
    const handleFetch = async (e) => {

        e.preventDefault();
        const [err, response] = await to(axios.get(`https://api.github.com/users/${userSearch}`));
        if (!err) {
            const isValid = validProfile.find(profile => profile.avatar_url === response.data.avatar_url);
            if (!isValid)
                setValidProfile([...validProfile, {
                    avatar_url: response.data.avatar_url
                }]);
        }

    }

    return (
        <>

            <TeamContainer onSubmit={handleFetch}>

                <TeamWrapper style={{ height: '100vh' }}>
                    <div style={{ background: 'blue' }}>
                        <TeamTitle> Crea tu equipo </TeamTitle>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <InputFieldBox>
                            <InputTitle> Nombre: </InputTitle>
                            <Input />
                        </InputFieldBox>
                        <InputFieldBox>
                            <InputTitle> Url </InputTitle>
                            <InputUrl placeholder='https://github.com/...' />
                        </InputFieldBox>
                    </div>

                    <InputFieldBox style={{ display: 'flex', flexDirection: 'column', padding: "0" }}>
                        <InputTitle> Descripción </InputTitle>
                        <InputTextArea maxLength='250' />
                    </InputFieldBox>


                    <InputFieldBox style={{ display: 'flex', flexDirection: 'column', padding: "2rem 0 0 0" }}>

                        <InputTitle> Usuarios </InputTitle>

                        <InputBtnBox>
                            <Input name='userSearch' onChange={(e) => setUserSearch(e.target.value)} />
                            <BtnAdd> Añadir </BtnAdd>
                        </InputBtnBox>
                    </InputFieldBox>
                    <div style={{ display: 'block', textAlign: 'center' }}>
                        <div>
                            {validProfile ? validProfile.map(renderMembers) : <div></div>}
                        </div>
                    </div>

                    <UserBox>
                        <UserName> Maikel </UserName>
                        <BtnDeleteUser> Quitar </BtnDeleteUser>
                    </UserBox>

                </TeamWrapper>

            </TeamContainer>


        </>
    );

};

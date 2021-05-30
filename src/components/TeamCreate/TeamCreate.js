
import { useState } from 'react';
import axios from 'axios';
import to from 'await-to-js';

import {

    TeamContainer,
    TeamWrapper,
    InputFieldBox,
    InputTitle,
    Input,
    InputTextArea,
    InputBtnBox,

} from './TeamCreateElements';

import { MainTitle } from '../Main/MainElements';
import { Btn } from '../CardAddForm/CardAddFormElements';



export const TeamCreate = () => {

    const [userSearch, setUserSearch] = useState('');
    const [validProfile, setValidProfile] = useState([]);
    const [formData, setFormData] = useState({
        members: validProfile
    });

    const renderMembers = (member) => {
        return (<span >
            <img style={{ width: "75px", height: "75px", borderRadius: "50%", margin: "0 2rem 2rem" }} src={member.avatar_url} />
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
        <TeamContainer onSubmit={handleFetch}>
                
            <MainTitle> Crea tu equipo </MainTitle>

            <InputFieldBox>
                <InputTitle> Nombre: </InputTitle>
                <Input placeholder='El Equipo A'/>
            </InputFieldBox>
            <InputFieldBox>
                <InputTitle> Url: </InputTitle>
                <Input placeholder='https://github.com/...' />
            </InputFieldBox>

            <InputFieldBox style={{ display: 'flex', flexDirection: 'column', padding: "0" }}>
                <InputTitle> Descripción: </InputTitle>
                <InputTextArea maxLength='250' placeholder='Nos vamos a dedicar a...'/>
            </InputFieldBox>


            <InputFieldBox style={{ display: 'flex', flexDirection: 'column', padding: "2rem 0 0 0" }}>

                <InputTitle> Usuarios: </InputTitle>
                <div style={{ display: 'block', textAlign: 'center' }}>
                    <div>
                        {validProfile ? validProfile.map(renderMembers) : <div></div>}
                    </div>
                </div>

                <InputBtnBox>
                    <Input name='userSearch' onChange={(e) => setUserSearch(e.target.value)} />
                    <div style={{textAlign: 'right', paddingLeft: '2rem'}}>
                        <Btn> Añadir </Btn>
                    </div>
                </InputBtnBox>
            </InputFieldBox>

        </TeamContainer>

    );

};

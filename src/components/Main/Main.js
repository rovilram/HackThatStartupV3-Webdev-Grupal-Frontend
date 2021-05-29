import React, { useState } from 'react';

import { useHistory } from 'react-router';

import {

    MainContainer,
    MainWrapper,
    MainInputBox,
    InputBox,
    Input,
    MainBtn,
    BtnSearch

} from './MainElements';

export const Main = () => {

    const [value, setValue] = useState('');

    // Referencia al useHistory
    let history = useHistory();

    // Registrar el valor del input
    const handleInputValue = (e) => setValue(e.target.value)

    // Enviar la petición a la API de GitHub
    const handleFetch = async () => {
        const response = await fetch(`https://api.github.com/users/${value}/repos`);
        const data = await response.json();
        console.log(data);
    }
    


    return (
        <>
            <MainContainer>

                <MainWrapper>

                    <MainInputBox>
                    
                    <InputBox>
                        <Input onChange={handleInputValue} placeholder='Who are you in GitHub?'/>
                    </InputBox>

                    <MainBtn>
                        <BtnSearch onClick={handleFetch}> Search </BtnSearch>
                    </MainBtn>

                    </MainInputBox>

                </MainWrapper>

            </MainContainer>
        </>
    )


}

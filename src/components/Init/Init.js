import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import to from 'await-to-js';

// Context para logados / no logados
import LoggedContext from './../../context/loggedContext';

import {
    InitContainer,
    InitWrapper,
    InitMain,
    InputBox,
    BtnInitBox,
    SignupAdvice,
    Advice,
    ErrorMsg
} from './InitElements';

import {
    BtnSearch,
} from './../Main/MainElements';
import { HeaderLogoBox, Logo } from '../Header/HeaderElements';
import { Input } from '../TeamCreate/TeamCreateElements';
import axios from 'axios';



export const Init = () => {
    const history = useHistory();
    // Context de estar o no logado
    const { setLogged } = useContext(LoggedContext);
    // Manejo de errores al enviar la información
    const [error, setError] = useState(false);
    // Estado para saber qué página renderizar
    const [login, setLogin] = useState(true);


    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const [logupData, setLogupData] = useState({
        username: '',
        password: '',
        email: ''
    });

    const handleLogin = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSignup = (e) => {
        setLogupData({
            ...logupData,
            [e.target.name]: e.target.value
        });
    };

    const handleForm = async (e) => {
        e.preventDefault();

        if (login) {
            const [err, response] = await to(axios.post('http://localhost:3000/api/user/login', loginData));
            if (err) {
                setError(true);
                setTimeout(() => {
                    setError('')
                }, 3000);
            } else {
                console.log(response.data);
                setLogged(true);
                history.push('/home');
            }
        } else {
            const [err, response] = await to(axios.post('http://localhost:3000/api/user/register', logupData));
            if (err) {
                setError(true);
                setTimeout(() => {
                    setError('')
                }, 3000);
            } else {
                console.log(response.data);
                history.push('/');
            }
        }

    };

    // Enviaríamos la info del formulario a back
    // const handleSignup = () => setSignup(false);

    return (

        <>
            <InitContainer>

                <InitWrapper>

                    <HeaderLogoBox isSidebar>
                        <Logo isSidebar>Fake<span style={{color:'rgba(0,0,0, 0.7'}}>H</span>ub</Logo>
                    </HeaderLogoBox>

                    <InitMain>

                        <InputBox onSubmit={handleForm}>

                            {
                                login
                                    ? <>
                                        <Input type="test" name='username' value={loginData.username} onChange={handleLogin} placeholder='Username' />
                                        <Input type='password' name='password' value={loginData.password} onChange={handleLogin} placeholder='Password' />
                                    </>

                                    : <>
                                        {/* <Input value={userName} placeholder='Give me a user name' /> */}
                                        <Input type="text" name="username" onChange={handleSignup} value={logupData.username} placeholder='GitHub username' />
                                        <Input type='email' name='email' onChange={handleSignup} value={logupData.email} placeholder='GitHub email' />
                                        <Input type='password' name='password' onChange={handleSignup} value={logupData.password} placeholder='Password' />
                                    </>

                            }




                            <BtnInitBox>
                                <BtnSearch type="submit"> Here we go </BtnSearch>
                            </BtnInitBox>

                            <ErrorMsg> {error ? 'Something go wrong, let´s try again' : null} </ErrorMsg>

                            <SignupAdvice>
                                {login ?
                                    <Advice> You´re not one of us yet? <span onClick={() => setLogin(false)}>C´mon</span> </Advice> :
                                    <Advice> You already have an account <span onClick={() => setLogin(true)}>Login</span> </Advice>
                                }
                            </SignupAdvice>

                        </InputBox>



                    </InitMain>



                </InitWrapper>

            </InitContainer>
        </>
    )

}

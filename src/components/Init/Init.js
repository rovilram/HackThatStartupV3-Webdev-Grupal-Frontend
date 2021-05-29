import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';

// Context para logados / no logados
import LoggedContext from './../../context/loggedContext'

import {
    
    InitContainer,
    InitWrapper,
    InitHeader,
    InitTitle,
    InitMain,
    InputBox,
    BtnInitBox,
    SignupAdvice,
    Advice,
    ErrorMsg
    

} from './InitElements';

import {
    
    BtnSearch, 
    Input

} from './../Main/MainElements';



export const Init = () => {

    // Context de estar o no logado
    const {logged, setLogged} = useContext(LoggedContext);

    // Estado para saber qué página renderizar
    const [signup, setSignup] = useState(true);

    // History para direccionar
    const history = useHistory();

    // Estado para valores de formulario
    const [mail, setMail] = useState({mail: ''} );
    const [pass, setPass] = useState({pass: ''} );
    const [userName, setUserName] = useState({userName: ''} );
    const [gitName, setGitName] = useState({gitName: ''} );

    // Manejo de errores al enviar la información
    const [error, setError] = useState(false);

    const handleForm = (e) => {

        e.preventDefault();
        if(mail.mail === 'chris@io.com'  && pass.pass === 'nuwe') {
            setLogged(true);
            history.push('/home');
        } else {
            setError(true);
            setTimeout(() => {
                setError('')
            }, 3000);
        };

        setMail({mail: ''});
        setPass({pass: ''});
        setUserName({userName: ''});
        setGitName({gitName: ''});
    };
                
            
    // Recogemos el valor del campo mail
    const handleMail = (e) => setMail({mail: e.target.value} );

    // Recogemos el valor del campo pass
    const handlePass = (e) => setPass({pass: e.target.value} );

    // Recogemos el valor del campo de nombre de usuario
    const handleUserName = (e) => setUserName({userName: e.target.value} );

    // Recogemos el valor del campo de mail de github
    const handleGitName = (e) => setGitName({gitName: e.target.value} );


    // Enviaríamos la info del formulario a back
    const handleSignup = () => setSignup(false);



    return (

        <>
            <InitContainer>

                <InitWrapper>

                    <InitHeader>
                        <InitTitle> FakeHub </InitTitle>
                    </InitHeader>

                    <InitMain>

                        <InputBox onSubmit={handleForm}>
                            
                            {
                                signup
                                    ?  <>
                                            <Input value={mail.mail} onChange={handleMail} placeholder='Give me a valid mail' />
                                            <Input value={pass.pass} onChange={handlePass} placeholder='And a valid pass ;)' />
                                        </> 

                                    :  <>
                                            <Input value={userName.userName} onChange={handleUserName} placeholder='Give me a user name' />
                                            <Input value={gitName.gitName} onChange={handleGitName} placeholder='Ok, now a github user name' />
                                            <Input value={mail.mail} onChange={handleMail} placeholder='Your github mail' />
                                            <Input value={pass.pass} onChange={handlePass} placeholder='And a valid pass ;)' />
                                        </>
                                        
                            }

                            

                            
                            <BtnInitBox>
                                <BtnSearch> Here we go </BtnSearch>
                            </BtnInitBox>

                            <ErrorMsg> {error ? 'Something go wrong, let´s try again'  :  null} </ErrorMsg>

                            <SignupAdvice>
                                <Advice> You´re not one of us yet? <span onClick={handleSignup}>C´mon</span> </Advice>
                            </SignupAdvice>

                        </InputBox>

                        

                    </InitMain>

                    

                </InitWrapper>

            </InitContainer>
        </>
    )
    
}

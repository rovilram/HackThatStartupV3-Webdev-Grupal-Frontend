import React, { useState, useEffect } from 'react';
import { ImPencil } from 'react-icons/im';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import to from 'await-to-js';
import axios from 'axios';

import {
  FieldBox,
  Text,
  UserContainer,
  Field,
  Teams,
  TeamsBox,
  Wrapper,
} from './UserElements';

const fakeData = {
  username: 'Maikel Nait',
  email: 'maikelnait@io.com',
  repos: 22,
  teams: ['los manporreros', 'cuñaos', 'solteros con salero'],
};

export const User = () => {
  const [userData, setUserData] = useState({});

  const userDataFetch = async () => {
    const userId = '60b359db5df7ef396ba2e648';
    const [err, response] = await to(
      axios.get(`http://localhost:3000/api/user/${userId}`),
    );
    if (err) {
      console.error('ERROR', err);
    } else {
      console.log(response.data[0]);
    }
    //TODO si no funciona bien el fetch mete datos mokeados
    const newUserData = (response && response.data[0] )|| fakeData;
    setUserData(newUserData);
  };

  useEffect(() => {
    userDataFetch();
  }, []);

  return (
    <>
      <UserContainer>
        <FieldBox>
          <Text> Nombre de usuario </Text>
          <Wrapper>
            <Field> {userData.username} </Field>
            {/* <ImPencil /> */}
          </Wrapper>
        </FieldBox>

        <FieldBox>
          <Text> Correo electrónico </Text>
          <Wrapper>
            <Field> {userData.email} </Field>
            {/* <ImPencil /> */}
          </Wrapper>
        </FieldBox>

        <FieldBox>
          <Text> Número de repositorios</Text>
          <Wrapper>
            <Field> {userData.repos} </Field>
            {/* <ImPencil /> */}
          </Wrapper>
        </FieldBox>

{/*         <FieldBox>
          <Text> Equipos </Text>

          {userData.teams &&
            userData.teams.map((cur) => {
              return (
                <>
                  <TeamsBox>
                    <Teams> {cur} </Teams>
                    <AiOutlineCloseCircle color="red" fontSize="1.2rem" />
                  </TeamsBox>
                </>
              );
            })}
        </FieldBox> */}
      </UserContainer>
    </>
  );
};

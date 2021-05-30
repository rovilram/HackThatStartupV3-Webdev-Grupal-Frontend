import React, { useState, useEffect } from 'react';
import { Input, InputTitle } from '../TeamCreate/TeamCreateElements';
import { Btn, InputsWrapper, FormWrapper } from './CardAddFormElements';

export const CardAddForm = ({ addCreditCard }) => {
  const [numTarjeta, setNumTarjeta] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [date, setDate] = useState(null);

  const handleChangeNumTarjeta = (e) => {
    setNumTarjeta(e.target.value);
  };
  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
  const handleAdd = () => {
    const newCreditCard = {
      name: nombre,
      number: numTarjeta,
      expDate: date,
      credits: 0,
    };
    addCreditCard(newCreditCard);
  };

  return (
    <FormWrapper>
      <div style={{width: 'max-content', padding: '0 2rem'}}>
        <InputsWrapper>
          <InputTitle>Número de tarjeta:</InputTitle>
          <Input
            placeholder="000000000000"
            type="text"
            maxLength={12}
            onChange={(e) => handleChangeNumTarjeta(e)}
          />
        </InputsWrapper>
        <InputsWrapper>
          <InputTitle>Nombre del titular:</InputTitle>
          <Input
            placeholder="Nombre y apellidos"
            type="text"
            onChange={(e) => handleChangeNombre(e)}
          />
        </InputsWrapper>
      </div>
      <div style={{width: 'max-content', padding: '0 2rem', textAlign: 'right'}}>
        <InputsWrapper>
          <InputTitle>Fecha de caducidad:</InputTitle>
          <Input
            placeholder="00/00"
            type="text"
            onChange={(e) => handleChangeDate(e)}
          />
        </InputsWrapper>
      
        <Btn
          onClick={(e) => {
            e.preventDefault();
            handleAdd();
          }}
        >
          Añadir
        </Btn>
      </div>
    </FormWrapper>
  );
};

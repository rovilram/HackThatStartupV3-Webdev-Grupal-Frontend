import React, {useState, useEffect} from 'react';
import { Input, InputTitle } from '../TeamCreate/TeamCreateElements';
import { Btn, InputsWrapper, FormWrapper } from './CardAddFormElements';

export const CardAddForm = () => {

    const [ numTarjeta, setNumTarjeta ] = useState(null);
    const [ nombre, setNomber ] = useState(null);
    const [ date, setDate ] = useState(null);

    const handleChangeNumTarjeta = (e) => {
        console.log(e.currentTarget.target)
    }
    const handleChangeNombre = (e) => {
        console.log(e.currentTarget.target)
    }
    const handleChangeDate = (e) => {
        console.log(e.currentTarget.target)
    }
    const handleAdd = () => {
        console.log('ola que ase');
    }

    return (
        <FormWrapper> 
            <div>
                <InputsWrapper>
                    <InputTitle>Numero de tarjeta</InputTitle>
                    <Input placeholder='000000000000' type='text' maxLength={12} onChange={(e)=>handleChangeNumTarjeta(e)}/>
                </InputsWrapper>
                <InputsWrapper>
                    <InputTitle>Nombre del titular:</InputTitle>
                    <Input placeholder='Nombre y apellidos' type='text'  onChange={(e)=>handleChangeNombre(e)}/>
                </InputsWrapper>
                <InputsWrapper>
                    <InputTitle>Fecha de caducidad:</InputTitle>
                    <Input placeholder='00/00' type='text' onChange={(e)=>handleChangeDate(e)}/>
                </InputsWrapper>
            </div>
            <Btn
                onClick={(e)=>{
                    e.preventDefault();
                    handleAdd();
                }}
            >
                Añadir
            </Btn>
            
        </FormWrapper>
    )
}


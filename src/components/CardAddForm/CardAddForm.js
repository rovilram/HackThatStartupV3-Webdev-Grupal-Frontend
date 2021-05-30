import React, {useState, useEffect} from 'react';
import { Input, InputTitle } from '../TeamCreate/TeamCreateElements';

export const CardAddForm = () => {

    const [ numTarjeta, setNumTarjeta ] = useState(null);
    const [ nombre, setNomber ] = useState(null);
    const [ date, setDate ] = useState(null);

    const handleChangeNumTarjeta = (e) => {
        console.log(e.currentTarget.target)
    }

    return (
        <div className='add-card-form'>
            <div>
                <InputTitle>Numero de tarjeta</InputTitle>
                <Input placeholder='000000000000' type='text' maxLength={12} onChange={(e)=>handleChangeNumTarjeta(e)}/>
            </div>
            <div>
                <InputTitle>Nombre del titular:</InputTitle>
                <Input placeholder='Nombre y apellidos' type='text' />
            </div>
            <div>
                <InputTitle>Fecha de caducidad:</InputTitle>
                <Input placeholder='00/00' type='text' />
            </div>
            
        </div>
    )
}


import React, { useState, useEffect } from 'react';

import {
   CreditCardBox,
   CreditCardInfo,
   CreditCardNumber,
   CreditContentWrapper,
   CreditsWrapper,
   Btn
} from './CreditCardElements';


 export const CreditCard = (props) => {
    
     const { card } = props;
     const [ bgColor, setBgColor ] = useState(null);
     const [ cardNumber, setCardNumber ] = useState(null);

     useEffect(()=> {
        if(card) {
            const aux = card.number.toString();
            let auxArr = [];
            for (let i = 0; i <= 3; i++) {
                auxArr.push(aux.substr(i*4,4))
            }
            setCardNumber(auxArr.join(' ').toString())
        }
     }, [card]);

     useEffect(()=>{
        const randomColor = Math.floor(Math.random()*16777215 +1).toString(16) ;
        setBgColor('#'+randomColor);
     }, []);
     
    const handleClickAdd = () => {
        console.log('añade creditos')
    }

    return (
        <CreditContentWrapper>
            <CreditCardBox bgColor={bgColor}>
                <div style={{ width:'100%'}}>
                <CreditCardNumber>
                    {cardNumber}
                </CreditCardNumber>
                <div style={{ display: 'flex', justifyContent: 'space-between', width:' 100%', padding: '1.5rem'}}>
                        <CreditCardInfo>
                            {card.name}
                        </CreditCardInfo>
                        <CreditCardInfo>
                            {card.expDate}
                        </CreditCardInfo>
                </div>
            </div>
            </CreditCardBox>
            <div style={{display: 'flex', flexDirection:'column', alignItems: 'flex-end', marginLeft: '1.5rem'}}>
                <CreditsWrapper>
                   Actualmente tienes {card.credits} creditos
                </CreditsWrapper>
                <div style={{display:'flex', paddingRight: '1.5rem', alignItems: "center"}}>
                    <p>¿Quieres añadir más?</p>
                    <Btn
                    onClick={(e)=>{
                        e.preventDefault();
                        handleClickAdd();
                    }}
                    >
                        +
                    </Btn>
                </div>
            </div>
        </CreditContentWrapper>
    )
}

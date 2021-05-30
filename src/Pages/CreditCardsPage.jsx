import React, {useState} from 'react';
import { CreditCard } from '../components/CreaditCard/CreditCard';
import {Sidebar} from './../components/Sidebar/Sidebar';
import styled from 'styled-components';

const ContentWrapper = styled.section`
background-color: #FFFFFF;
padding: 2rem;
min-height: 100vh;

@media all and (min-width: 960px) {
    padding:4rem;
    position: absolute;
    top: 0;
    right: 0;
    width: 82%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

`;

const fakeCreditCardsArr =[
    {
        name: 'Pepito Moreno del Todo',
        number:4929016615872534,
        expDate:'01/01/2000',
        credits: 0
    },
    {
        name: 'Pepito Moreno del Todo',
        number:4929016615872534,
        expDate:'01/01/2000',
        credits: 0
    },
    {
        name: 'Pepito Moreno del Todo',
        number:4929016615872534,
        expDate:'01/01/2000',
        credits: 0
    },
    {
        name: 'Pepito Moreno del Todo',
        number:4929016615872534,
        expDate:'01/01/2000',
        credits: 0
    },
    {
        name: 'Pepito Moreno del Todo',
        number:4929016615872534,
        expDate:'01/01/2000',
        credits: 0
    },
    {
        name: 'Pepito Moreno del Todo',
        number:4929016615872534,
        expDate:'01/01/2000',
        credits: 0
    },
]

export const CreditsCardPage = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
   
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <ContentWrapper>
                {
                    fakeCreditCardsArr.map((c,i)=>{
                        return(
                            <CreditCard
                                card={c}
                                key={i}
                            />
                        )
                    })

                }
           </ContentWrapper>
        </div>
    )
}

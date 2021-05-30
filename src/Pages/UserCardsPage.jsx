import React, {useState, useEffect} from 'react';
import { CreditCard } from '../components/CreaditCard/CreditCard';
import { CardAddForm } from '../components/CardAddForm/CardAddForm';
import {Sidebar} from './../components/Sidebar/Sidebar';
import styled from 'styled-components';

const ContentWrapper = styled.section`
background-color: #FFFFFF;
min-height: 100vh;

@media all and (min-width: 960px) {
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

const CreditCardAddWrapper = styled.div`
    background-color:var(--primary-color);
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    margin-bottom: 2rem;

    @media all and (min-width: 960px) {
        padding: 4rem 0 4rem 4rem;
        margin-bottom: 4rem;
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


export const UserCardsPage = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [ showForm, setShowForm ] = useState(true);

    const hadleShowForm = () => {
        if(showForm) {
            setShowForm(false);
        } else {
            setShowForm(true);
        }
        
    }
   
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <ContentWrapper className='content-cards-wrapper'>
                <CreditCardAddWrapper>
                    { showForm ? (
                        <CardAddForm/>
                    ) : (
                        <p>aqui no</p>
                    )}
                </CreditCardAddWrapper>
                <div style={{padding: '0 2rem 2rem'}}>
                    <h1>Tus tarjetas:</h1>
                </div>
                

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

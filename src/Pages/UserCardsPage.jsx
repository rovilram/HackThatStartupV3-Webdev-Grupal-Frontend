import React, { useState, useEffect } from 'react';
import { CreditCard } from '../components/CreaditCard/CreditCard';
import { CardAddForm } from '../components/CardAddForm/CardAddForm';
import { MainTitle } from '../components/Main/MainElements';
import { Btn } from '../components/CardAddForm/CardAddFormElements';
import styled from 'styled-components';
import validator from 'validator';

const ContentWrapper = styled.section`
  background-color:  var(--tertiary-color);
  min-height: 100vh;
  padding-bottom: 4rem;

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
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 2rem 4rem;
  margin-bottom: 2rem;

  @media all and (min-width: 960px) {
    padding: 4rem 0 4rem 4rem;
    margin-bottom: 4rem;
  }
`;

const fakeCreditCardsArr = [
  {
    name: 'Pepito Moreno del Todo',
    number: 4929016615872534,
    expDate: '01/01/2000',
    credits: 0,
  },
  {
    name: 'Pepito Moreno del Todo',
    number: 4929016615872534,
    expDate: '01/01/2000',
    credits: 0,
  },
  {
    name: 'Pepito Moreno del Todo',
    number: 4929016615872534,
    expDate: '01/01/2000',
    credits: 0,
  },
  {
    name: 'Pepito Moreno del Todo',
    number: 4929016615872534,
    expDate: '01/01/2000',
    credits: 0,
  },
  {
    name: 'Pepito Moreno del Todo',
    number: 4929016615872534,
    expDate: '01/01/2000',
    credits: 0,
  },
  {
    name: 'Pepito Moreno del Todo',
    number: 4929016615872534,
    expDate: '01/01/2000',
    credits: 0,
  },
];

export const UserCardsPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [creditCards, setCreditCards] = useState([]);
  const toggle = () => setIsOpen(!isOpen);

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  const addCreditCard = (newCreditCard) => {
    const validExpDate = validator.isDate(newCreditCard.expDate, {
      format: 'DD/MM/YYYY',
    });
    const validName = !validator.isEmpty(newCreditCard.name, {
      ignore_whitespace: true,
    });

    const validNumber = validator.isNumeric(newCreditCard.number, {
      no_symbols: true,
    });

    validExpDate &&
      validName &&
      validNumber &&
      setCreditCards([...creditCards, newCreditCard]);
  };

  useEffect(() => {
    // aquí irá fech a las credit cards
    setCreditCards(fakeCreditCardsArr);
  }, []);

  return (
    <ContentWrapper className="content-cards-wrapper">
    <CreditCardAddWrapper>
        {showForm ? (
        <CardAddForm addCreditCard={addCreditCard} />
        ) : (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end'}}>
            <MainTitle fontSize='1.3rem' marginRight='2rem' noMarginBottom>¿Quiéres añadir una nueva targeta?</MainTitle>
            <Btn
                onClick={(e)=>{
                    e.preventDefault();
                    handleShowForm()
                }}
                notMarginTop
                marginRight='2rem'
            >
                Añadir
            </Btn>
        </div>
        )}
    </CreditCardAddWrapper>

    <MainTitle>Tus tarjetas:</MainTitle>

    {creditCards.map((c, i) => {
        return <CreditCard card={c} key={i} />;
    })}
    </ContentWrapper>
  );
};

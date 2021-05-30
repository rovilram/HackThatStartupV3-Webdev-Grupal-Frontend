import React, { useState, useEffect } from 'react';
import { CreditCard } from '../components/CreaditCard/CreditCard';
import { CardAddForm } from '../components/CardAddForm/CardAddForm';
import { Sidebar } from './../components/Sidebar/Sidebar';
import styled from 'styled-components';
import validator from 'validator';
import to from 'await-to-js';
import axios from 'axios';

const ContentWrapper = styled.section`
  background-color: #ffffff;
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
  background-color: var(--primary-color);
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

  const [showForm, setShowForm] = useState(true);

  const hadleShowForm = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  const addCreditCardFetch = async (creditCard) => {
    const [err, response] = await to(
      axios.post('http://localhost:3000/api/card/', creditCard),
    );
    if (err) {
      console.error('ERROR', err);
    } else {
      console.log(response.data);
      setCreditCards([...creditCards, creditCard]);
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

    // TODO: ver de donde sacar el userID
    //newCreditCard.userId = '60b359db5df7ef396ba2e648';

    validExpDate &&
      validName &&
      validNumber &&
      addCreditCardFetch(newCreditCard);
  };

  useEffect(() => {
    const getCreditCardsFetch = async () => {
      const userId = '60b359db5df7ef396ba2e648';
      const [err, response] = await to(
        axios.get(`http://localhost:3000/api/card/user/${userId}`),
      );
      if (err) {
        console.error('ERROR', err);
      } else {
        console.log(response.data);
      }
    };
    getCreditCardsFetch();
    setCreditCards(fakeCreditCardsArr);
  }, [creditCards]);

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ContentWrapper className="content-cards-wrapper">
        <CreditCardAddWrapper>
          {showForm ? (
            <CardAddForm addCreditCard={addCreditCard} />
          ) : (
            <p>aqui no</p>
          )}
        </CreditCardAddWrapper>
        <div style={{ padding: '0 2rem 2rem' }}>
          <h1>Tus tarjetas:</h1>
        </div>

        {creditCards.map((c, i) => {
          return <CreditCard card={c} key={i} />;
        })}
      </ContentWrapper>
    </div>
  );
};

import React, {useState} from 'react';
import { TeamsCard } from '../components/TeamsCard/TeamsCard';
import {MainTitle} from './../components/Main/MainElements';
import styled from 'styled-components';

const ContentWrapper = styled.section`
background-color: var(--tertiary-color);
padding: 2rem 2rem 2rem;
min-height: 100vh;

@media all and (min-width: 960px) {
    padding: 8rem 2rem 2rem;
    position: absolute;
    top: 0;
    right: 0;
    width: 82%;
    display: flex;
    align-items: center;
}

`;

const CardWrapper = styled.div`
    margin-top: 2rem;
    @media all and (min-width: 960px) {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        margin-top: 4rem;
    }
`;

const fakeTeamsArray = [
    {
        id: '98766',
        name: 'Pokemon',
        description: 'Nos dedicamos entre todos a mantener la mejor api del mundo, que como todos saben es aquella que devuelve todos los pokemon segun generacion',
        imageUrl: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/09/como-conseguir-pikachu-gorra-pokemon-espada-escudo-2083655.jpg?itok=kziVIlM2',
    },
    {
        id: '98766',
        name: 'Pokemon',
        description: 'Nos dedicamos entre todos a mantener la mejor api del mundo, que como todos saben es aquella que devuelve todos los pokemon segun generacion',
        imageUrl: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/09/como-conseguir-pikachu-gorra-pokemon-espada-escudo-2083655.jpg?itok=kziVIlM2',
    },
    {
        id: '98766',
        name: 'Pokemon',
        description: 'Nos dedicamos entre todos a mantener la mejor api del mundo, que como todos saben es aquella que devuelve todos los pokemon segun generacion',
        imageUrl: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/09/como-conseguir-pikachu-gorra-pokemon-espada-escudo-2083655.jpg?itok=kziVIlM2',
    },
    {
        id: '98766',
        name: 'Pokemon',
        description: 'Nos dedicamos entre todos a mantener la mejor api del mundo, que como todos saben es aquella que devuelve todos los pokemon segun generacion',
        imageUrl: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/09/como-conseguir-pikachu-gorra-pokemon-espada-escudo-2083655.jpg?itok=kziVIlM2',
    },
]

export const TeamsView = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
   
    return (
        <ContentWrapper>
            <div>
                <MainTitle>Estos son los equipos que has creado</MainTitle>
                <CardWrapper>
                    {
                        fakeTeamsArray.map((t,i)=>{
                            return(
                                <TeamsCard
                                    teamName={t.name}
                                    teamDescription={t.description}
                                    teamImageUrl = {t.imageUrl}
                                />
                            )
                        })

                    }
                </CardWrapper>
            </div>
        </ContentWrapper>

    )
}

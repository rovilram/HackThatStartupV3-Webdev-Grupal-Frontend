import React, {useState} from 'react';
import { TeamsCard } from '../components/TeamsCard/TeamsCard';
import {Sidebar} from './../components/Sidebar/Sidebar';
import styled from 'styled-components';

const ContentWrapper = styled.section`
background-color: var(--tertiary-color);
padding: 2rem;
min-height: 100vh;

@media all and (min-width: 960px) {
    padding:4rem;
    position: absolute;
    top: 0;
    right: 0;
    width: 82%;
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
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <ContentWrapper>
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
           </ContentWrapper>
        </div>
    )
}

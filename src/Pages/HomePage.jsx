import React, {useState} from 'react';

import { HeaderMain } from './../components/Header/HeaderMain';
import { Main } from './../components/Main/Main';
import {Sidebar} from './../components/Sidebar/Sidebar';

export const HomePage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeaderMain toggle={toggle} />
            <Main />
        </>
    )

}

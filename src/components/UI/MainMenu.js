import React from 'react';
import {Link} from 'react-router-dom';
import {home, spain, contact, formikContact} from 'conf/routes';
import PropTypes  from 'prop-types';

const MainMenu = ({onClickChangeThemeButton}) => (
    <nav>
        <ul>
            <li>
                <Link to={home()}>Global</Link>
            </li>
            <li>
                <Link to={spain()}>España</Link>
            </li>
            <li>
                <Link to={contact()}>Contacto</Link>
            </li>
            <li>
                <Link to={formikContact()}>ContactoFormik</Link>
            </li>
            <li>
                <button onClick={onClickChangeThemeButton}>Cambiar tema</button>
            </li>
        </ul>
    </nav>
);

MainMenu.propType = {
    onClickChangeThemeButton: PropTypes.func.isRequired
};

export default MainMenu;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

// import logo from '../img/css-logo.svg';
// import cart from '../img/shopping-cart.svg';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar d-flex navbar-expand-sm navbar-dark bg-primary px-sm-5">
                <Link to='/'>
                    <img src="img/css-logo.svg" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">  
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto nav-btn">
                    <ButtonContainer>  
                        <img src="img/shopping-cart.svg" />
                        my cart
                    </ButtonContainer>
                </Link>
            </nav>
        )
    }
}

const NavWrapper = styled.nav `
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
        

    }
`





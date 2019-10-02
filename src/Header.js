import React from 'react';
import styled from 'styled-components';
import {withRouter, Link} from 'react-router-dom';
import logo from './logo.svg';
import { GlobalStyle } from './global-styles';


const Header = () => (
    <>
    <GlobalStyle/>
    <Link to ='/'>
        <Wrapper>
            <HeaderImage src={logo} alt='logo'/>
        </Wrapper>
    </Link>
    </>
)


const Wrapper = styled.div`
    background-color: #282c34;
    min-height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;

`
const HeaderImage = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    height : 60px;

`

export default withRouter(Header);

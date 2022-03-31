import React from 'react';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import paths from '../routes';
import styles from '../styles';

const PATHS = paths();

export default function Header(props){
    const style = styles();

    const user = useSelector(state => state.user);
    console.log("user two");
    console.log(user);

    return (<div className='nav-div' style={style.nav}>
        <Navbar sticky='top' style={style.nav}>
            <NavbarBrand>CHATAPP</NavbarBrand>
            <Nav.Link
            href={PATHS.homepage}
            >
                HOME
            </Nav.Link>
            <Nav.Link
            href={PATHS.join}
            >
                JOIN US
            </Nav.Link>
            <Nav.Link
            href={PATHS.main}
            >
                ROOMS
            </Nav.Link>
        </Navbar>
    </div>);
}
import React, { useEffect } from 'react';
import { Navbar, Nav, NavbarBrand, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import paths from '../routes';
import styles from '../styles';


export default function Header(props){
    const style = styles();
    const PATHS = paths();
    const user = useSelector(state => state.user);


    useEffect(() => {
        
    }, [user]);

    return (<div className='nav-div' style={style.navDiv}>
        <Navbar variant='dark' bg='dark' style={styles.nav}
        className="justify-content-center">
            <NavbarBrand>CHATAPP</NavbarBrand>
            <Nav>
                <Nav.Link
                href={PATHS.homepage}
                >
                    HOME
                </Nav.Link>
                {!user.logged &&
                    <Nav.Link
                    href={PATHS.join}
                    >
                        JOIN US
                    </Nav.Link>
                }
                {user.logged &&
                    <Nav.Link
                    href={PATHS.account}
                    >
                        ACCOUNT
                    </Nav.Link>
                }
                {user.logged && 
                    <Button
                    variant='dark'
                    href={PATHS.logout}
                    >
                        LOGOUT
                    </Button>
                }
            </Nav>
        </Navbar>
    </div>);
}
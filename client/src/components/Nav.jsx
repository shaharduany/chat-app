import React, { useEffect } from 'react';
import { Navbar, Nav, NavbarBrand, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import paths from '../routes';
import { logoutUser } from '../store/user/user';
import styles from '../styles';


export default function Header(props){
    const style = styles();
    const PATHS = paths();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(state => state.user);

    const handleLogoutClick = async (event) => {
        let action = logoutUser();
        dispatch(action);
        navigate(PATHS.homepage);
    }

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
                    onClick={handleLogoutClick}
                    >
                        LOGOUT
                    </Button>
                }
            </Nav>
        </Navbar>
    </div>);
}
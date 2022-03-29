import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const styles = {
    color: "white",
    padding: 20,
    backgroundColor: "darkred",
    alignItems: "center",
}

export default function Nav(props){
    const user = useSelector(state => state.user);
    console.log("user two");
    console.log(user);

    return (<div className='nav-div'>
        <ul>
            <Link to="/">
                <li>HOME</li>
            </Link>
            <Link to="/join">
                <li>JOIN US</li>
            </Link>
            <Link to="/main">
                <li>Main</li>
            </Link>
        </ul>
    </div>);
}
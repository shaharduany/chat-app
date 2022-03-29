import React from 'react';
import { useSelector } from 'react-redux';

export default function Nav(props){
    const user = useSelector(state => state.user);
    console.log("user two");
    console.log(user);
    
    return (<h1>Got here</h1>);
}
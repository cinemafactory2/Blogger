import React, { Fragment } from 'react';
import Navbar from './Navbar';
import './Sc2.css';

const Error = ({ msg, isUser }) => {
    return (
        <Fragment>
            <Navbar name="Error" createPost={isUser} />
            <h3 id="err">{msg}</h3>
        </Fragment>
    );
};

export default Error;

import React from 'react';
import Footer from '../Includes/Footer';
import Header from '../Includes/Header';

function ApplicationTemplate(props) {
    return (
        <React.Fragment>
            <Header/>
            {props.children}
            <Footer/>
        </React.Fragment>
            
    )
}

export default ApplicationTemplate

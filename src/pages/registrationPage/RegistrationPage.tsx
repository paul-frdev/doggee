import React from 'react';
import { useLocation } from 'react-router-dom';

const RegistrationPage: React.FC = () => {
    const {state} = useLocation();

    console.log('state', state);
    
    return (
        <div>RegistrationPage</div>
    );
};

export default RegistrationPage;


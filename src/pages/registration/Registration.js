import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Registration.scss'

const Registration = ({registrationUser, setPage}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const checkRegistration = () => {
        registrationUser({
            email,
            password
        })
    }

    return (
      <div className={'registration'}>
          <input value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 type="text"
                 placeholder={'Email'}/>
          <input value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 type="password"
                 placeholder={'password'}/>
          <button type="text" onClick={checkRegistration}>
              Login
          </button>
          <button type="text" onClick={() => setPage('1')}>
              Авторизоваться
          </button>
      </div>
    );
};

export default Registration;
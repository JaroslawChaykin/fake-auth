import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './LogIn.scss'

const LogIn = ({logIn, setPage}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const checkRegistration = () => {
        const log = logIn({email, password})
        setEmail('')
        setPassword('')
        return log ? alert(log) : ''
    }

    return (
      <div className={'login'}>
          <h1>Логин</h1>
          <div className={'login-form'}>
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
              <button type="text" onClick={() => setPage('2')}>
                  Регистрация
              </button>
          </div>
      </div>
    );
};

export default LogIn;
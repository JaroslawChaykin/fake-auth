import React, { useState } from 'react';
import './Authorization.scss'
import LogIn from '../login/LogIn';
import Registration from '../registration/Registration';

const Authorization = ({ logIn, registrationUser }) => {
    const [page, setPage] = useState('1')
    return (
      <>
          {
              page === '1'
                ? <LogIn logIn={logIn} setPage={setPage}/>
                : <Registration registrationUser={registrationUser} setPage={setPage}/>
          }
      </>
    );
};

export default Authorization;
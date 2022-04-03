import React, { useState } from 'react';
import './App.css';
import Authorization from './pages/authorization/Authorization';
import Main from './pages/main/Main';

function App() {

    const [registrations, setRegistrations] = useState([
        {email: 'test@test.ru', password: '12345'}
    ]);
    const [auth, setAuth] = useState(null);

    const logIn = (data) => {
        let error = '';
        registrations.forEach(item => {
            if (item.email === data.email || item.password === data.password) {
                setAuth(item);
            } else {
                error = 'Нет такого пользователя';
            }
        });
        return error;
    };

    const registrationUser = (data) => {
        setRegistrations([...registrations, data])
    }

    const logOut = () => {
        setAuth(null);
    };

    return (
      <div className="App">
          {
              auth
                ? <Main auth={auth} logOut={logOut}/>
                : <Authorization logIn={logIn} registrationUser={registrationUser}/>
          }
      </div>
    );
}

export default App;

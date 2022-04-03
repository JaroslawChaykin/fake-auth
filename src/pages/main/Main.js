import React from 'react';
import { Button } from 'react-bootstrap';
import { Navigate, Route } from 'react-router-dom';

const Main = ({auth, logOut}) => {
    return (
      <div>
          {
              !auth
                ?
                <div>
                    Залогиньтесь
                </div>
                :
                <Button variant="primary" type="submit" onClick={() => logOut()}>
                    Выйти
                </Button>
          }

      </div>
    );
};

export default Main;
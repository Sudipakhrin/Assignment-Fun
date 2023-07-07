import React from 'react'
import Rewatchgame from './Rewatchgame';
import Home from './Home';

const PrivateRoute = () => {

  const myItem = localStorage.getItem('user');
  return (
    <>
      {
        myItem ? <Rewatchgame /> : <Home />

      }
    </>
  )
}

export default PrivateRoute
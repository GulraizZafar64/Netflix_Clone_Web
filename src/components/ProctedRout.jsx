import React from 'react';
import { Navigate } from 'react-router-dom';
// import About from '../pages/About';
const ProctedRout = ({isAuthenticated,Component}) => {
    if(!isAuthenticated){
        console.log('ya nahi chala')
      return  <Navigate  to='/login'/>
    }else{
        console.log('ya chala')
    }
return <Component/>;
};
export default ProctedRout
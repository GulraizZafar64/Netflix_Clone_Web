import React, { useEffect } from 'react'

import { Navigate,Outlet, useNavigate } from 'react-router-dom'
import Login from '../pages/Login'

const ProctedRout = ({isAunthenticated}) => {

    
return    isAunthenticated ? Outlet:<Login/>

}

export default ProctedRout
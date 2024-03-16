import React from 'react'
import NavBar from '../components/NavBar'
import AdminSelect from '../components/AdminSelect'
import adminbg from "../assets/adminbg.jpg"
const AdminHome = () => {
  return (
    <>
    <body style={{backgroundImage: `url(${adminbg})`,height:'100vh'}}>
    

<NavBar/>

<AdminSelect/>

    </body>
    
    </>
  )
}

export default AdminHome
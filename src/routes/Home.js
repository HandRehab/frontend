import React from 'react'
import Log from './Log'
import AdminHome from './AdminHome'
import PatientHome from './PatientHome'
import Land from "./Landing"
function Home(){
    return(
        localStorage.getItem('logged')?(dashSelect()):<Log/>
    );
    function dashSelect(){
        const userType =localStorage.getItem("user");
        console.log(userType);
        if(userType==1){
            return <AdminHome/>
        }
        else if(userType==2){
            return <PatientHome/>
        }
        else{
            return<Land/>
        }
        
    }
}
export default Home
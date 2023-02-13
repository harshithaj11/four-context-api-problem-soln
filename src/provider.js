import React,{useState} from "react";
import PackageContext from "./context"; 
// we can name anyting because we are exporting as default

const Provider = props=>{
    const [mission,setMisson]=useState({
        mname: "Go to Russia",
        agent: "007",
        accept: "Not Accepted"
    })
    return(<PackageContext.Provider
    value={{data:mission,
    isMissionAccepted:()=>{
        setMisson({...mission,accept:"ACCEPTED"})

    }}}>
        {props.children}  
        
    </PackageContext.Provider>)
}
//package context act as a wraper
export default Provider;
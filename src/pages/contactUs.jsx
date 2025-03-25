import React from "react";
import Navbar1 from "../components/NavBar";
import HeaderCover from "../components/headerCover";
import { headerCoverList } from "../assets/data";
import Credits from "../components/Credits";
import Card4 from "../components/card4";




function ContactUs(){
    return(
        <>
        <Navbar1/>
        {headerCoverList.filter(item => item.id === 4 ).map(item=>(
        <HeaderCover key={item.id} item={item}/>
        ))}
        <Card4/>
        <Credits/>
        </>
    )
}


export default ContactUs;
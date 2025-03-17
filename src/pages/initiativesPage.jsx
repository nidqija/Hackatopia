import { headerCoverList } from "../assets/data";
import HeaderCover from "../components/headerCover";
import Navbar1 from "../components/NavBar";



function InitiativePage(){
   return(
    <>
    <Navbar1/>
    {headerCoverList.filter(item => item.id === 1).map(item =>(
      <HeaderCover key={item.id} item={item}/>
    ))}
    </>
   )
}

export default InitiativePage;
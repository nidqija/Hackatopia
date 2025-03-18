import { headerCoverList, listofInitiatives } from "../assets/data";
import HeaderCover from "../components/headerCover";
import ListOfActivities from "../components/listsofactivities";
import Navbar1 from "../components/NavBar";



function InitiativePage(){
   return(
    <>
    <Navbar1/>
    {headerCoverList.filter(item => item.id === 1).map(item =>(
      <HeaderCover key={item.id} item={item}/>
    ))}
    <div style={{backgroundColor : "lightblue"}}>
      {listofInitiatives.map(item =>(
      <ListOfActivities key={item.id} item = {item}/>
      ) )}
    </div>
    </>
   )
}

export default InitiativePage;
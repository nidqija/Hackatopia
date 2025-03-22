import { headerCoverList, ourHQdata } from "../assets/data";
import Card3 from "../components/cards3";
import HeaderCover from "../components/headerCover";
import Navbar1 from "../components/NavBar";
import { Container } from "react-bootstrap";


function HeadQuaters(){

    return(
    <>
    <Navbar1/>
    {headerCoverList.filter(item => item.id === 3).map(item =>(
        <HeaderCover key={item.id} item={item}/>
    ))}
    <Container>
    {ourHQdata.filter(item => item.id === 1).map(item => (
        <Card3 key={item.id} item={item}/>
    ))}
    </Container>
    </>
    )
}



export default HeadQuaters;
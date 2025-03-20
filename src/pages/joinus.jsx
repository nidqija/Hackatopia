import { headerCoverList, joinUsData } from "../assets/data";
import HeaderCover from "../components/headerCover";
import Navbar1 from "../components/NavBar";
import Card1 from "../components/cards1";
import { Container } from "react-bootstrap";
import Card2 from "../components/cards2";

function JoinUs() {
    return (
        <>
            <Navbar1 />
            {headerCoverList.filter(item => item.id === 2).map(item => (
                <HeaderCover key={item.id} item={item} />
            ))}
            
            <Container className="my-5">
                <h1 className="p-5 text-center" style={{ fontFamily: "Playfair Display" }}>
                    Why Join Us?
                </h1>
            </Container>
            <Container>
            {joinUsData.filter(item => item.id === 1).map(item => (
                    <Card1 key={item.id} item={item} />
                ))}
            </Container>
            <Container>
            {joinUsData.filter(item => item.id === 2).map(item => (
                    <Card2 key={item.id} item={item} />
                ))}
            </Container>
            <Container>
            {joinUsData.filter(item => item.id === 3).map(item => (
                    <Card1 key={item.id} item={item} />
                ))}
            </Container>
        </>
    );
}

export default JoinUs;

import Credits from "../components/Credits";
import Navbar1 from "../components/NavBar";
import IntroHeader from "../components/headerIntro";
import HeaderSection from "../components/headerSection";

function HomePage() {
    return (
        <>
            <Navbar1 />
            <HeaderSection />
            <IntroHeader/>
            <br></br>
            <Credits/>
        </>
    );
}

export default HomePage;
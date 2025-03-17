import Container from "react-bootstrap/esm/Container";

function HeaderCover({item}){
    return(
        <div className="initiativesHeader">
            <Container>
                    <>
                    <a style={{color : 'transparent'}}>a</a>
                    <br />
                    <a style={{color : 'transparent'}}>a</a>
                    <br />
                    <a style={{color : 'transparent'}}>a</a>
                    <br />
                    <a style={{color : 'transparent'}}>a</a>
                    <h1  style={{color :"white" , fontFamily : "Playfair Display" , textAlign : "center"}}>{item.title}</h1>
                    <h5 className="p-1" style={{color :"white" , fontFamily : "Hanken Grotesk" ,  textAlign : "center"}}>{item.description}</h5>
                    <a style={{color : 'transparent'}}>a</a>
                    <br />
                    <a style={{color : 'transparent'}}>a</a>
                    <br />
                    <a style={{color : 'transparent'}}>a</a>
                    <br />
                    <a style={{color : 'transparent'}}>a</a>
                    </>
            </Container>
        </div>
    )
}


export default HeaderCover;
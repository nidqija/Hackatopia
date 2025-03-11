import Container from 'react-bootstrap/Container';
import '../assets/style.css';
import Card from 'react-bootstrap/Card';
import { Datalist } from '../assets/data';

function HeaderSection(){
    return (
      <>
    <div className='background'>
        <Container className='p-5'>
          <Card id='cardOfHeroSection' style={{width: '500px'}}  className='p-4 mb-5'>
            {Datalist.map((item) => (
              <>
             <h1 className='text-white p-2 text-center' style={{ fontFamily: 'Playfair Display'}}>{item.title}</h1>
             <p className='text-white p-2 text-center' style={{fontSize :'18px' , fontFamily : 'Hanken Grotesk' }}>{item.description}</p>
             </>
            ))}
           
         </Card>
      </Container>
    </div>

    </>
    )
}

export default HeaderSection;
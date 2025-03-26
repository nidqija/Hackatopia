import React from "react";
import {Container , Row , Col , Card } from 'react-bootstrap';






function Card4(){
     return(
        <div className="">
        <h1 className='text-center  p-5' style={{fontFamily : "Playfair Display" , color: "transparent"}}>What Violence Has Costed Us So Far</h1>
        <Container className='p-4' >
        <Row xs={3} md={4} className="g-4">
           <Col>
             <Card className='text-center'>
               <Card.Body className='StatisticsBody'>
                 <Card.Title className='StatisticsBodyHeader'>Phone Number</Card.Title>
                 <Card.Text className='StatisticsBodyDesc '>
                 <span style={{fontSize : '20px'}}>+60193213532</span> 
                 </Card.Text>
               </Card.Body>
             </Card>
           </Col>
           <Col>
             <Card className='text-center'>
               <Card.Body className='StatisticsBody'>
                 <Card.Title className='StatisticsBodyHeader'>Email</Card.Title>
                 <Card.Text className='StatisticsBodyDesc'>
                 <span style={{fontSize : '20px'}}>+60193213532</span> 

                 </Card.Text>
               </Card.Body>
             </Card>
           </Col>  
            <Col>
             <Card className='text-center'>
               <Card.Body className='StatisticsBody'>
                 <Card.Title className='StatisticsBodyHeader'>Twitter </Card.Title>
                 <Card.Text className='StatisticsBodyDesc'>
                 <span style={{fontSize : '20px'}}>+60193213532</span> 
                 </Card.Text>
               </Card.Body>
             </Card>
           </Col>  
            <Col>
             <Card className='text-center'>
               <Card.Body className='StatisticsBody'>
                 <Card.Title className='StatisticsBodyHeader'>Instagram</Card.Title>
                 <Card.Text className='StatisticsBodyDesc'>
                 <span style={{fontSize : '20px'}}>+60193213532</span> 

                 </Card.Text>
               </Card.Body>
             </Card>
           </Col>
           <h1 className='text-center' style={{fontFamily : "Playfair Display" , color: "transparent"}}>What Violence Has Costed Us So Far</h1>
           <h1 className='text-center' style={{fontFamily : "Playfair Display" , color: "transparent"}}>What Violence Has Costed Us So Far</h1>


           
       </Row>
       </Container>
      </div>
     )
}


export default Card4;
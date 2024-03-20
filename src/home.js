import Card from 'react-bootstrap/Card';
import bank from './images/bad_bank.jpg';
import './App.css'

function Home(){

    return(<>
    
    <Card className="text-center">
      {/* <Card.Header className='header'>&quot; Taking Banking Technology to the Common Man &quot;</Card.Header> */}
      <Card.Body>
        <Card.Title className='title' style={{fontSize:'50px',fontWeight:'bold'}}>"BAD BANK"</Card.Title>
        <Card.Text>
        
        
       <img className='homeimg' src={bank} alt='' height='600px' width='1000px'></img>
       <p className='msg'> 
          &quot;“Everyday is a bank account, and time is our currency. 
          No one is rich, no one is poor, we've got 24 hours each.”&quot;<br></br>
        </p>
          </Card.Text>
      </Card.Body>
    </Card>
    </>)
}

export default Home;
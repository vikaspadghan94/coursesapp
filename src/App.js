import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Button, Card, Col, Container, Row} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Container>
          <Row>
            <Col className='col-12 text-left py-4'>
            <h1>Our Courses</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title>Course-1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
               </Col>
            <Col lg="3" md="6"><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/7147667/pexels-photo-7147667.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title>Course-2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> </Col>
            <Col lg="3" md="6"> <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/4201333/pexels-photo-4201333.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title>Course-3</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
            <Col lg="3" md="6"> <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/230514/pexels-photo-230514.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title>Course-4</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
          </Row>
        </Container>
      </Container>

      <Footer />
    </div>
  );
}

export default App;

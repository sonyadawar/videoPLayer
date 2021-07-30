import { Container,Row,Col,Form,Button} from 'react-bootstrap';
import Videos from './Videos/index.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

    const [searchTerm,setSearchTerm]=useState('')
    const [passToChild,setPassToChild]=useState('')

    const onSubmit=(e)=>{
      e.preventDefault()
      setPassToChild(searchTerm)
    }

  return (
    <Container fluid="md">
      <Row>
        <Form onSubmit={e=>{onSubmit(e)}}>
          <Row>
            <Col xs={9}>
              <Form.Control placeholder="Search a video.." 
                            size='lg'
                            onChange={(e)=>{setSearchTerm(e.target.value)}} 
                            style={{margin:'3%'}}
                            />
            </Col>
            <Col>
              <Button variant="primary"
                      onClick={(e)=>{onSubmit(e)}}
                      style={{margin:'10%',backgroundColor:'black'}}>Search
              </Button>
            </Col>
   
          </Row>
        </Form>
      
      </Row>
      <Videos searchString={passToChild}
              style={{width:'100%'}}
      />
    </Container>
  );
}

export default App;

import React from 'react';
import Character from './components/Character';
import { Container, Row, Col } from 'reactstrap';

const App = () => {
  const characters = [
    'Luke Skywalker',
    'C-3PO',
    'R2-D2',
    'Darth Vader',
    'Leia Organa',
    'Owen Lars',
  ];

  return (
    <Container>
      <h1 className="Header">Star Wars Characters</h1>
      <Row>
  {characters.map((character, index) => (
    <React.Fragment key={index}>
      <Col xs={6} sm={4} md={3} lg={3}>
        <Character name={character} />
      </Col>
    </React.Fragment>
  ))}
</Row>

    </Container>
  );
};

export default App;





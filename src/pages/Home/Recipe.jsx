import React from "react";
import { Button, Card,  Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Recipe = ({ item }) => {
  const { id,chefName, img,bio,like,number,experience} = item;

  return (
    <Container>
    
      <Col className="mt-4 ">
          <Card>
            <Card.Img variant="top" style={{height:"200px",width:"100%"}} src={img} />
            <Card.Body className="text-secondary fw-semibold">
              <Card.Title className="text-dark fs-3">{chefName}</Card.Title>
              <Card.Text>
               {bio}
              </Card.Text>
              <Card.Text>
                {experience} years of experience
              </Card.Text>
              <Card.Text>
                {number} item dishes
              </Card.Text>
              <Card.Text>
                {like} people like
              </Card.Text>
              <Link to={`/recipes/${id}`}>
              <Button variant="secondary" className="text-white fw-semibold">View Recipe</Button>
              </Link>
              
            </Card.Body>
          </Card>
        </Col>
   
    
    </Container>
  );
};

export default Recipe;

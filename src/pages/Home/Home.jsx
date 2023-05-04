import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";


const Home = () => {
  const recipe = useLoaderData()
  console.log(recipe)

  return (
    <Container>
      <Row className="mt-5">

        <Col>
          <img
            className="img-fluid"
            style={{ height: "250px", width: "500px", borderRadius: "10px" }}
            src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/09/Street-Food-In-Patiala-cover.jpg"
            alt=""
          />
        </Col>

        <Col className="mx-auto">
          <div className="mx-auto">
            <h1 className="fw-bold fs-2">A Chef In Every Testy Meal Box</h1>
            <p className="text-secondary fw-semibold ">
              Whether you're a seasoned chef or a beginner in the kitchen, our website has something for everyone. From classic comfort foods to trendy international dishes, we're confident that you'll find a recipe that you'll love. So, come explore our food recipes website and get inspired to create amazing dishes that will tantalize your taste buds and impress your family and friends!
            </p>
            <Button variant="danger" className="text-white fw-semibold">Visit Us</Button>
          </div>
        </Col>

      </Row>

      <div className="mt-5">

        <h2 className="mt-5 text-center text-dark fw-bold"> OUR SERVICE </h2>

        <div className="service d-flex justify-content-evenly gap-4 text-center">
          <div>
            <img src="image/gi.jpg" alt="" />
            <h4>Good Food</h4>
          </div>
          <div>
            <img src="image/delivery.jpg" alt="" />
            <h4>Delivery Food</h4>
          </div>

          <div>
            <img src="image/service.jpg" alt="" />
            <h4>Good Service</h4>
          </div>
        </div>




      </div>


     



      <Row xs={1} md={2} lg={3} className="g-4 d-flex mt-5">
        {recipe.map(item => <Recipe item={item} key={item.id}></Recipe>)}
      </Row>

      <div className="m-5">

<h2 className="mt-5 text-center text-dark fw-bold"> OUR SPONSORS </h2>

<div className="service d-flex justify-content-evenly gap-4 text-center">
  <div>
    <img src="image/k.jpg" alt="" />
    
  </div>
  <div>
    <img src="image/p.png" alt="" />
    
  </div>

  <div>
    <img src="image/m.png" alt="" />
    
  </div>
</div>




</div>
    </Container>
  );
};

export default Home;

import React from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import {  toast } from 'react-toastify';

const SingleChef = () => {
  const chef = useLoaderData();
  
  console.log(chef);
  const { chefName, id, bio, like, number, img, recipe, experience } = chef;
  // const id=useParams();
  // console.log(id)
//   const handleToast=()=>{
//     toast.success("Add favourite button");
//   }
const handleFavourite = () =>{
    toast("You Have Already Bookmarked This Blog");
}
  return (
    <Container>
      <Card className="mt-5">
        <Card.Img
          variant="top"
          style={{ height: "500px", width: "100%" }}
          src={img}
        />
        <Card.Body className="text-secondary">
          <Card.Text className="text-dark">
            <h1>{chefName}</h1>
          </Card.Text>
          <Card.Text>
            <h3>{bio}</h3>
          </Card.Text>
          <Card.Text>
            <h3>{like} people like this</h3>
          </Card.Text>
          <Card.Text>
            <h3>{number} of item cooked</h3>
          </Card.Text>
          <Card.Text>
            <h3>{experience} years experienced</h3>
          </Card.Text>

          {recipe.map((r) => (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Recipe Name</th>
                  <th colSpan={5}>{r.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Ingredients</th>
                  {r.ingredients.map((i) => (
                    <td>{i}</td>
                  ))}
                </tr>
                <tr>
                  <th>Cooking Method</th>
                  {r.steps.map((s) => (
                    <td>{s}</td>
                  ))}
                </tr>
                <tr>
                  <th >Rating</th>
                  <td colSpan={5}>
                    {r.rating}
                    <Rating
                      placeholderRating={r.rating}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-warning"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                  </td>
                </tr>
              </tbody>
            </Table>
          ))}
           <Button onClick={handleFavourite} variant="secondary" className="text-white fw-semibold">Favourite</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SingleChef;

import React from "redux";
import Container from "../components/Container/Container";
import List from "../components/Lists/ProductsList";
import SectionTitle from "../components/SectionTitle/SectionTitle";

export default function ProductPage() {
  return (
    <div className="animateContent">
      <SectionTitle
        title="Products"
        subtitle="Here you can view all the products listed from the database"
      />
      <Container>
        <List />
      </Container>
      <hr />
      <Container>
        <h2>Motivation...</h2>
        <p>
          In this section, the app will create, update, delete and list all the products from the API.
          The products' categories will be listed too with the API, so in order to asign one, you need to create it first.
          I made this way to make multiple entity relations within the Redux state.
        </p>
      </Container>
    </div>
  );
}

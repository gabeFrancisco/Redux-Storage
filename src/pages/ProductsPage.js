import React from "redux";
import Container from "../components/Container/Container";
import List from "../components/Products/List";
import SectionTitle from "../components/SectionTitle/SectionTitle";

function ProductPage() {
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
          In this section, I'l will try to implement all the basic CRUD
          operations to work in Redux state, using search algorithm for each
          product, according to the use case
        </p>
      </Container>
    </div>
  );
}

export default ProductPage;

import React from "react";
import Container from "../components/Container/Container";
import SectionTitle from "../components/SectionTitle/SectionTitle";

export default function HomePage() {
  return (
    <div className="animateContent">
      <SectionTitle
        title="Welcome to the Redux-Storage!"
        subtitle="This app is a study for myself, for fixing the Redux concepts in my mind ;)"
      />

      <Container>
      <p>
        This program is made with a minimal UI styling for simplification
        purposes. I want to focus on the Redux side, rather than CSS side.
      </p>

      <p>But, I like this minimal look a lot! It gives an oldschool "pre-stylesheet era" feeling!</p>
      <h2>Motivation...</h2>
        <p>
          In this project, I'l will try to implement all the basic CRUD
          operations to work in Redux state, using search algorithm for each
          entity, according to the use case.
        </p>
      </Container>
    
    </div>
  );
}

import React from "react";
import Container from "../components/Container/Container";
import CategoriesList from "../components/Lists/CategoriesList";
import SectionTitle from "../components/SectionTitle/SectionTitle";

function CategoriesPage() {
  return (
    <div className="animateContent">
      <SectionTitle
        title="Categories"
        subtitle="In this area you can manage your products' categories"
      />

      <Container>
        <CategoriesList/>
      </Container>
    </div>
  ); 
}

export default CategoriesPage;

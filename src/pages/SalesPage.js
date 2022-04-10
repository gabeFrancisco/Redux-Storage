import React from "react";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import Container from '../components/Container/Container'
import SalesList from "../components/Lists/SalesList";

export default function SalesPage() {
  return (
    <div className="animateContent">
      <SectionTitle
        title="Sales"
        subtitle="Here you can list all your sales!"
      />
      <Container>
        <SalesList/>
      </Container>
    </div>
  );
}

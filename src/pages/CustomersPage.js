import React from "react";
import Container from "../components/Container/Container";
import CustomersList from "../components/Lists/CustomersList";
import SectionTitle from "../components/SectionTitle/SectionTitle";

export default function CustomersPage() {
  return (
    <div className="animateContent">
      <SectionTitle
        title="Customers"
        subtitle="In this are you can list all your customers"
      />

      <Container>
        <CustomersList/>
      </Container>
    </div>
  );
}

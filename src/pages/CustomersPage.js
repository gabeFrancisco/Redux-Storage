import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container/Container";
import CustomersList from "../components/Lists/CustomersList";
import SectionTitle from "../components/SectionTitle/SectionTitle";

export default function CustomersPage() {
  const navigate = useNavigate();

  return (
    <div className="animateContent">
      <SectionTitle
        title="Customers"
        subtitle="In this area you can list all your customers"
      />

      <Container>
        <CustomersList />
        <div style={{ margin: "15px" }}>
          <button style={{ padding: "5px" }} onClick={() => navigate('newCustomer')}>New customer!</button>
        </div>
      </Container>
    </div>
  );
}

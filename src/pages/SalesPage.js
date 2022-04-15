import React from "react";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import Container from '../components/Container/Container'
import SalesList from "../components/Lists/SalesList";
import { useNavigate } from "react-router-dom";

export default function SalesPage() {
  const navigate = useNavigate();

  return (
    <div className="animateContent">
      <SectionTitle
        title="Sales"
        subtitle="Here you can list all your sales!"
      />
      <Container>
        <SalesList/>
        <div style={{ margin: "15px" }}>
          <button style={{ padding: "5px" }} onClick={() => navigate('newSale')}>New Sale +</button>
        </div>
      </Container>
    </div>
  );
}

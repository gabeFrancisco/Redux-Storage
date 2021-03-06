import { useSearchParams } from "react-router-dom";
import Container from "../components/Container/Container";
import CustomerInfo from "../components/Customer/CustomerInfo";

import SectionTitle from "../components/SectionTitle/SectionTitle";

export default function ShowCustomerPage() {
  const [searchParams] = useSearchParams();
  const customerId = searchParams.get("customerId");

  return (
    <div className="animateContent">
      <SectionTitle title="Customer Information" />
      <Container>
        <CustomerInfo customerId={customerId}/>
      </Container>
    </div>
  );
}

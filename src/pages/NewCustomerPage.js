import React from 'react'
import Container from '../components/Container/Container'
import NewCustomer from '../components/Customer/NewCustomer'
import SectionTitle from '../components/SectionTitle/SectionTitle'

export default function NewCustomerPage(){
  return (
    <div className='animateContent'>
      <SectionTitle title="New Customer" subtitle="In this page you can create a new customer!"/>
      <Container>
        <NewCustomer/>
      </Container>
    </div>
  )
}
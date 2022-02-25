import React from 'redux'
import Container from '../components/Container/Container'
import List from '../components/Products/List'
import SectionTitle from '../components/SectionTitle/SectionTitle'

function ProductPage(){
  return(
    <div>
      <SectionTitle title="Products" subtitle="Here you can view all the products listed from the database"/>
      <Container>
        <List/>
      </Container>
    </div>
  )
}

export default ProductPage
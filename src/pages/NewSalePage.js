import React from 'react'
import NewSale from '../components/Sale/NewSale'
import SectionTitle from '../components/SectionTitle/SectionTitle'

export default function NewSalePage(){
  return (
    <div className="animateContent">
      <SectionTitle title="New Sale" subtitle="You can create a new sale here!"/>
      <div className="center">
        <NewSale/>
      </div>
    </div>
  )
}

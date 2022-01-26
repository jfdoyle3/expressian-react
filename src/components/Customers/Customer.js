import React from 'react';
import BorderCard from '../common/BorderCard';

const Customer = (props) => {

  const {name,address} = props.Customer
  

  return (
    <BorderCard>
      <h2>{name}</h2>
      <h2>{address}</h2>
      
    </BorderCard>
  )
}

export default Customer;
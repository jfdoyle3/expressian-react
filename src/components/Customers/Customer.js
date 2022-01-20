import React from 'react';
import BorderCard from '../common/BorderCard';

const Customer = (props) => {

  const {name} = props.Customer

  return (
    <BorderCard>
      <h2>{name}</h2>
      
    </BorderCard>
  )
}

export default Customer;
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../Providers/AuthProvider';
import Spinner from '../faCommon/Spinner';
import axios from 'axios';
import Customer from './Customer';

const Customers = (props) => {
  const [auth] = useContext(AuthContext)
  const [Customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  // use effect to pull list of Customers
  // use state to store the Customers
  // neet bearer token to get the Customer list.

  useEffect(() => {
    const _getCustomers = async () => {
      try {

        const res = await axios.get(
          'http://localhost:8080/api/customers/self',
          {
            headers: {
              "Authorization": `Bearer ${auth.token}`
            }
          }
        )
      
        setLoading(false);
        setCustomers(res.data);
      } catch (err) {
        console.log(err.response.message)
      }


    }
    setLoading(true);
    _getCustomers();
  },[auth.token])

  const displayCustomers = () => {
    return Customers.map(dev => <Customer Customer={dev} key={dev.id}/>)
  }

  return (
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>Customers</h1>
      {loading ? 
        <Spinner /> 
      :
        displayCustomers()
      }
    </div>
  )
}

export default Customers;
import React, { useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';

function Navbar() {

  const { cart, totalQuantity } = useSelector((state) => state.allCart)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal())
  }, [cart])

  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
          <Link to="/">ALL PRODUCT</Link>
        </span>
        <MDBBtn color='dark'>
          <Link to="/cart">CART({totalQuantity})</Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}


export default Navbar 
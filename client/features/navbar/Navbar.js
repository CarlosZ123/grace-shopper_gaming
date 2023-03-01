import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import { MDBCol, MDBRow } from 'mdbreact';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
  // const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <div className="navbar">
        <MDBCol md='2'>
          <img src="/logo.png" className="logo" />
        </MDBCol>
        <MDBCol md="7">
          <input
            className="form-control searchBar"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </MDBCol>

        <MDBCol md="1">
          <Button variant="light" className="search">
            Search
          </Button>
        </MDBCol>

        <MDBCol md="2">
          <nav>
            
            {/* // isLoggedIn ?  */}
            
              <div>
                {/* The navbar will show these links after you log in */}
                <Link to="/home">Home</Link>
                <button type="button" onClick={logoutAndRedirectHome}>
                  Logout
                </button>
              </div>
              <div className="login">
                {/* The navbar will show these links before you log in */}
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  className="link"
                  to="/api/login"
                >
                  Login
                </Link>
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  className="link"
                  to="/api/signup"
                >
                  Sign Up
                </Link>
              </div>
          </nav>
          <Link to="/api/cart"> Cart</Link>
        </MDBCol>
      </div>
    </div>
  );
};

export default Navbar;

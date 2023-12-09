
import Nav from 'react-bootstrap/Nav';
import {NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { useSelector } from 'react-redux';
import { AiOutlineHeart } from "react-icons/ai";
import React, { useContext ,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { languageContext } from '../../Contexts/language';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs'; 
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
const Header = () => {
  const favorites = useSelector((state)=> state.favorites.favorites)
  const [language, setLanguage] = useState('En');
   
  const navigate = useNavigate();
  const handleNavigateToFavorites = () => {
    navigate('/favourite');
  };
  return (
    
    <>

    <Navbar expand="lg" id="navbar-parent" className="d-flex justify-content-between">
      <Navbar.Brand   className="title-movies mx-3"   href="/">
       Movies
      </Navbar.Brand>
      <Navbar.Toggle   className='coll' aria-controls="basic-navbar-nav" />
      <Navbar.Collapse   id="basic-navbar-nav">
        <Nav className="sn me-auto">
          <NavLink to="/" className="sn mx-3">
            Home
          </NavLink>
          <NavLink className="sn mx-3" to="/register">
          Register
          </NavLink>
          <NavLink className="sn mx-3" to="/movieth">
          movieThunk
          </NavLink>
         
          
          <div  onClick={handleNavigateToFavorites}  class="notification">
          <AiOutlineHeart style={{ fontSize: '30px' }} />
         <span class="badge">{favorites.length}</span>
           </div>


          
        
         
         
         <h5 className="ml-5"> {language}</h5> 
 


   
          <Form className='search-form'>
      
      <InputGroup className=" position-relative">
        <InputGroup.Text className="position-absolute top-50 start-0 translate-middle-y ps-3">
         
          <BsSearch className="text-muted" />
        </InputGroup.Text>
        <FormControl type="search" id="default-search" className="ps-3 text-sm " placeholder="Search " required />
      
      </InputGroup>
    </Form>
    
    <FaFacebook style={{height:"25px", width:"25px" , color:"white" , marginLeft:"50px" ,cursor:"pointer"}} />
    <FaInstagram  style={{height:"25px", width:"25px" , color:"white"  , marginLeft:"20px" ,cursor:"pointer"}} />
    <FaSpotify  style={{height:"25px", width:"25px" , color:"white"  , marginLeft:"20px",cursor:"pointer"}}/>
    <RiTwitterXLine  style={{height:"25px", width:"25px" , color:"white"  , marginLeft:"20px",cursor:"pointer"}} />
   

    <h5 style={{marginLeft:"75px" , color:"whitesmoke" ,cursor:"pointer"}}>Logout</h5>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <hr></hr>
</>

  )};
export default Header;

import React, { useState } from 'react'; // Import React
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addFav } from '../store/slices/fav.js';
import { BsFillHeartFill } from "react-icons/bs";
import Row from 'react-bootstrap/Row';




const Favourite = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch= useDispatch()
 

 


   
  
  return (
    <>
 <div className='container mt-5'>
     <Row >

     <h1 className='favourites-number'>
      favourites Number is {favorites.length}
      </h1>
      {
  
        favorites.map((prd) => (
          <div key={prd.id} className="col-3 d-flex flex-wrap">
          <div style={{position:"relative" ,marginTop:"50px", height: '300px' }}>
            
              <BsFillHeartFill
                onClick={() => {
                  dispatch (addFav({
                    id: prd.id,
                  }));

                }}
                style={{ position:"absolute",
                top:"10px",
                left:"5px" ,
                 fontSize: "21px",
                 color: "red",
                 cursor: "pointer"  }}
              />
           
             <img
                 
                 variant="top"
                 style={{ height: "270px", objectFit: 'cover', borderRadius:0 }}
                 src={`https://image.tmdb.org/t/p/w500/${prd.posterpath}`}
                
               />
            <h2 style={{ marginTop:"5px" , fontSize: "15px" , color: "white"}}>{prd.title}</h2>
                                                           
            </div>
          </div>
        ))
        
       
        }
        </Row>
        </div>
    </> 
  );
};

export default Favourite;

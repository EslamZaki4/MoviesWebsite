import React from "react";
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axiosInstance from '../axios/instance.js';
import { useNavigate } from 'react-router';
import './Movies.css'
import { BsFillHeartFill } from "react-icons/bs";
import { addFav } from '../../store/slices/fav.js';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function MoviesTH() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const maxMovies = 18;
    axiosInstance.get('/movie/popular', {
      params: {
        page: currentPage, 
      },
    }).then((res) => {
      console.log(res.data.results)
      const limitedMovies = res.data.results.slice(0, maxMovies); // Slice the array to get a limited number of movies
      setMovies(limitedMovies)
      setTotalPages(res.data.total_pages)
      console.log( res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [currentPage])

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const favorites = useSelector((state)=> state.favorites.favorites)
  const dispatch= useDispatch()

  const addtoFav=(movie)=>{
    dispatch(addFav(movie))
  }

const isMovieInFavorite1=(movieId)=>{
 return favorites.some((item)=>item.id === movieId);
}

  return (
    <>
   
   <div className='container mt-5'>
        <Row >
          {
          movies.map((prd) => (
            <div key={prd.id} className="col">
              <div style={{  position:"relative" ,marginTop:"50px", height: '300px' }}>
                
                  <BsFillHeartFill
                    onClick={() => {
                      addtoFav({
                        id: prd.id,
                        title: prd.title,
                        posterpath: prd.poster_path,
                        overview: prd.overview
                      })

                    }}
                    style={{ position:"absolute",
                    top:"10px",
                    left:"5px" ,
                     fontSize: "21px",
                     color: isMovieInFavorite1(prd.id) ? "red" : "white",
                     cursor: "pointer"  }}
                  />
               
                <img
                 
                  variant="top"
                  style={{ height: "270px", objectFit: 'cover', borderRadius:0 }}
                  src={`https://image.tmdb.org/t/p/w500/${prd.poster_path}`}
                  onClick={() => { navigate(`/details/${prd.id}`) }}
                />
              
                  <h2 style={{ marginTop:"5px" , fontSize: "15px" , color: "white"}}>{prd.title}</h2>
                  
               
              </div>
            </div>
          ))}
        </Row>
        <div className="my-5 mx-5 d-flex justify-content-between ">
          <button className="btn btn-danger mx-5" onClick={handlePreviousPage}>Previous</button>
          <button className="btn btn-success mx-5" onClick={handleNextPage}>Next</button>
        </div>
      </div>
    </>
  );

                  }

export default MoviesTH;


import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import axiosInstance from '../Components/axios/instance.js';

function Details() {

  const {id} = useParams()
  const [details, setDetails] = useState({})

  useEffect(() => {

 async  function getmovie() {
 const res =  await axiosInstance.get(`/movie/${id}`)

      console.log(res.data)
      setDetails(res.data)
  }
    getmovie()
  


  }, [])

  return (
    <>
          
            

      <div className='container mt-5 '>

        <Row  className="g-6 d-flex justify-content-center">
            <div  key={details.id}>
              <div style={{ display:"flex"  ,color:"white"}}>
                <img className="col-6 image-Details"   variant="top" src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} />
                <Card.Body className=" mx-5 col-6">
                  <Card.Title   style={{ fontWeight:"300"}}>
                   <div className="mb-2 "   style={{ fontWeight:"700"}}>
                   Film title
                   </div>
                    {details.original_title}
                    </Card.Title>

                    <Card.Title  className="mt-5 " style={{ fontWeight:"300"}}>
                   <div    className="mb-2 " style={{ fontWeight:"700"}}>
                    Date
                   </div>
                    {details.release_date}
                    </Card.Title>

                    <Card.Title  className="mt-5" style={{ fontWeight:"300"}}>
                   <div  className="mb-2 "  style={{ fontWeight:"700"}}>
                  Rating
                   </div>
                    {details.vote_average}
                    </Card.Title>

                  <Card.Text> 
                    <div   className="mt-5 mb-2" style={{ fontWeight:"700"}}>Movie summary</div>
                    {details.overview}
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
        </Row>

      </div>

    </>

  );
}

export default Details;
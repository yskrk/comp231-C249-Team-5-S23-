import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
//
// this component is used to list all articles
function ListArticles(props) {
  let navigate = useNavigate();
  //
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "api/api/articles";

  useEffect(() => {
    const fetchData = async () => {
      axios.get(apiUrl)
        .then(result => {
          console.log('result.data:',result.data)
          //check if the user has logged in
          if(result.data.screen !== 'auth')
          {
            
            console.log('data in if:', result.data )
            setData(result.data);
            setShowLoading(false);
          }
        }).catch((error) => {
          console.log('error in fetchData:', error)
        });
      };  
    fetchData();
  }, []);

  const showDetail = (id) => {
    navigate( '/showarticle/' + id);
    
  }

  return (
    <div>
      { data.length !== 0
        ? <div>
          {showLoading && <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner> }
          <ListGroup>
            {data.map((item, idx) => (
              <ListGroup.Item key={idx} action onClick={() => { showDetail(item._id) }}>{item.title}</ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        : < Login />
      }
    </div>

  );
}
//
export default ListArticles;

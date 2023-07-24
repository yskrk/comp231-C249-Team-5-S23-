import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
//
// this component is used to show a single user
function ShowUser(props) {
  let navigate = useNavigate();
  // Get the userId param from the URL.
  let { id } = useParams();
  console.log(id)
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "/api/users/" + id;
  //runs only once after the first render
  useEffect(() => {
    setShowLoading(false);
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setData(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, []);

  const editUser = (id) => {
   navigate('/edit/' + id);
  };

  const deleteUser = (id) => {
    setShowLoading(true);
    const user = { firstName: data.firstName, lastName: data.lastName, 
      email: data.email,username: data.username, password: data.password };
  
    axios.delete(apiUrl, user)
      .then((result) => {
        setShowLoading(false);
        navigate('/list')
      }).catch((error) => setShowLoading(false));
  };

  return (
    <div>
      {showLoading && <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner> }    
        <h1>Name: {data.firstName}, {data.lastName}</h1>
        <p>Email: {data.email}</p>
        <p>User name: {data.username}</p>

        <p>
          <Button type="button" variant="primary" onClick={() => { editUser(data._id) }}>Edit</Button>&nbsp;
          <Button type="button" variant="danger" onClick={() => { deleteUser(data._id) }}>Delete</Button>
        </p>
    </div>
  );
}
//
export default ShowUser;

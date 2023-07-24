import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
//
// this component is used to edit a user
function EditUser(props) {
  // Get the userId param from the URL.
  let { id } = useParams();
  console.log(id)
  let navigate = useNavigate();
  const [user, setUser] = useState({ _id: '', firstName: '', lastName: '', 
  email: '',username: '',password: '' });  
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "/api/users/" + id;
  //runs only once after the first render
  useEffect(() => {
    setShowLoading(false);
    //call api
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setUser(result.data);
      console.log(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, []);

  const updateUser = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = { firstName: user.firstName, lastName: user.lastName, 
      email: user.email,username: user.username };
    axios.put(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        navigate('/show/' + result.data._id)
      }).catch((error) => setShowLoading(false));
  };
  //runs when user enters a field
  const onChange = (e) => {
    e.persist();
    setUser({...user, [e.target.name]: e.target.value});
  }

  return (
    <div>
      {showLoading && 
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> 
      } 
        <Form onSubmit={updateUser}>
          <Form.Group>
            <Form.Label> First Name</Form.Label>
            <Form.Control type="text" name="firstName" id="firstName" placeholder="Enter first name" value={user.firstName} onChange={onChange} />
            </Form.Group>
          <Form.Group>
            <Form.Label> Last Name</Form.Label>
            <Form.Control type="text" name="lastName" id="lastName" placeholder="Enter last name" value={user.lastName} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" name="email" id="email" rows="3" placeholder="Enter email" value={user.email} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" name="username" id="username" placeholder="Enter user name" value={user.username} onChange={onChange} />
          </Form.Group>
          
        
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
    </div>
  );
}
//
export default EditUser;

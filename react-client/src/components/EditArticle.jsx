import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
// this component is used to edit an article
function EditArticle(props) {
  //
  let navigate = useNavigate();
  // Get the userId param from the URL.
  let { id } = useParams();
  console.log(id)
  //
  const [article, setArticle] = useState({ _id: '', title: '', 
  content: '' });  
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "/api/api/articles/" + id;
  //runs only once after the first render
  useEffect(() => {
    setShowLoading(false);
    //call api
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setArticle(result.data);
      console.log(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, []);

  const updateArticle = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = { title: article.title, content: article.content};
    //mimicks very much REST calls
    axios.put(apiUrl, data)
      .then((result) => {
        console.log('after calling put to update',result.data )
        setShowLoading(false);
        navigate('/showarticle/' + result.data._id)
      }).catch((error) => setShowLoading(false));
  };
  //runs when user enters a field
  const onChange = (e) => {
    e.persist();
    setArticle({...article, [e.target.name]: e.target.value});
  }

  return (
    <div>
      {showLoading && 
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> 
      } 
        <Form onSubmit={updateArticle}>
          <Form.Group>
            <Form.Label> Title</Form.Label>
            <Form.Control type="text" name="title" id="title" placeholder="Enter article title" value={article.title} onChange={onChange} />
            </Form.Group>
          <Form.Group>
            <Form.Label> Last Name</Form.Label>
            <Form.Control type="text" name="content" id="content" placeholder="Enter article content" value={article.content} onChange={onChange} />
          </Form.Group>
          
          
        
          <Button variant="primary" type="submit">
            Update Article
          </Button>
        </Form>
    </div>
  );
}
//
export default EditArticle;

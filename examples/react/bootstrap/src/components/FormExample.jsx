import { Row, Col, Table, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function FormExample() {
  const [formValidated, setFormValidated] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    score: 3
  });

  const [movies, setMovies] = useState([
    {title: 'Snatch', genre: 'Comedy', score: 5},
    {title: 'Dredd', genre: 'Action', score: 4},
    {title: 'The Silence of the Lambs', genre: 'Horror', score: 5},
    {title: 'Terminator 2: Judgement Day', genre: 'Science Fiction', score: 5}
  ]);

  const scoreValues = {
    1: 'Horrible',
    2: 'Bad',
    3: 'Okay',
    4: 'Good',
    5: 'Excellent'
  };

  function addMovie(e) {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;

    if(form.checkValidity() === true) {
      setMovies([{title: formData.title, genre: formData.genre, score: formData.score}, ...movies]);
      setFormData({
        title: '',
        genre: '',
        score: 3
      });
      setFormValidated(false);
    }
    else {
      setFormValidated(true);
    }
  }

  return (
    <>
      <h5 className='mt-4'>Form (and Table)</h5>
      <p>
        Here is a form example.<br/>
        My movie list...
      </p>

      <Table striped hover bordered>
        <thead>
          <tr>
            <th className='w-50'>Title</th>
            <th className='w-25'>Genre</th>
            <th className='w-25'>Score</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, key) =>
            <tr key={key}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.score}/5 - {scoreValues[movie.score]}</td>
            </tr>
          )}
        </tbody>
      </Table>

      <Row>
        <Col xs={8}>
          <Form noValidate validated={formValidated} onSubmit={addMovie}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
              <Form.Control.Feedback type='invalid'>
                is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='movieGenre' className='pt-2'>
              <Form.Label>Genre</Form.Label>
              <Form.Select value={formData.genre} onChange={(e) => setFormData({...formData, genre: e.target.value})} required>
                <option value=''>Select a genre</option>
                <option value='Action'>Action</option>
                <option value='Comedy'>Comedy</option>
                <option value='Drama'>Drama</option>
                <option value='Horror'>Horror</option>
                <option value='Romance'>Romance</option>
                <option value='Suspense'>Suspense</option>
                <option value='Science Fiction'>Science Fiction</option>
                <option value='Thriller'>Thriller</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='movieScore' className='pt-3'>
              <Form.Label>Score</Form.Label>
              <p className='mb-0 small'>{scoreValues[formData.score]}</p>
              <Form.Range value={formData.score} min={1} max={5} step={1} onChange={(e) => setFormData({...formData, score: e.target.value})} />
            </Form.Group>

            <Button variant='primary' type='submit' className='mt-2'>Add movie</Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default FormExample;
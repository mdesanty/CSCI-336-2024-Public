import { useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    { title: 'The Shawshank Redemption', genre: 'Drama' },
    { title: 'The Godfather', genre: 'Drama' },
    { title: 'The Dark Knight', genre: 'Action' },
    { title: 'Pulp Fiction', genre: 'Drama' },
    { title: 'Super Troopers', genre: 'Comedy' },
    { title: 'The Exorcist', genre: 'Horror' },
    { title: 'The Terminator', genre: 'Action' },
    { title: 'Die Hard', genre: 'Action' }
  ]);
  const [formData, setFormData] = useState({ title: '', genre: 'Action' });

  const handleSubmit = (event) => {
    event.preventDefault();
    setMovies([...movies, { title: formData.title, genre: formData.genre }]);
    setFormData({ title: '', genre: 'action' });
  }

  return (
    <div id="movies" style={{paddingLeft: '20px'}}>
      <h1>Movies</h1>
      <div>
        <table style={{width: '80%', border: '1px solid black'}}>
          <thead style={{ border: '1px solid black' }}>
            <tr>
              <th>Title</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody style={{ border: '1px solid black' }}>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" style={{paddingRight: '5px'}}>Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
        </div>

        <div style={{paddingTop: '10px'}}>
          <label htmlFor="genre" style={{paddingRight: '5px'}}>Genre:</label>
          <select id="genre" name="genre" value={formData.genre} onChange={(e) => setFormData({...formData, genre: e.target.value})}>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
          </select>
        </div>

        <div style={{ paddingTop: '15px' }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

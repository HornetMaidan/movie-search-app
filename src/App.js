import React, {useState} from 'react';
import axios from "axios";


function App() {

    const [data, setData] = useState({});
    const [movie, setMovie] = useState('');
    const [year, setYear] = useState('')

    const url = `https://www.omdbapi.com/?apikey=d35b9450&t=${movie}&y=${year}&plot=full`;

    const searchMovie = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setMovie('')
            setYear('')
        }
    }

  return (
    <div className="app">
      <div className="top">
        <h1>simple movie search engine</h1>
        <h3>perfect cinematic to match your mood</h3>
      </div>
      <div className="search">
            <div><input value={movie}
                    type="text"
                    onChange={event => setMovie(event.target.value)}
                    onKeyPress={searchMovie}
                    placeholder="movie title..."/>
            </div>
            <div>
              <input value={year}
                     type="text"
                     onChange={event => setYear(event.target.value)}
                     onKeyPress={searchMovie}
                     placeholder="year..."/>
            </div>
      </div>
      <div className="results">
          <div>
              <h1 className="error">{data.Error ? <h1>movie not found!</h1> : null}</h1>
              <h3>{data.Title ? <h3>{data.Title}, {data.Year}</h3> : null}</h3>
              <h4>{data.Genre ? <h4>Genre: {data.Genre}</h4> : null}</h4>
              <h4>{data.Actors ? <h4>Actors: {data.Actors}</h4> : null}</h4>
              <h4>{data.Runtime ? <h4>Runtime: {data.Runtime}</h4> : null}</h4>
              <h4>{data.Language ? <h4>Languages: {data.Language}</h4> : null}</h4>
              <h4>{data.Country ? <h4>Country: {data.Country}</h4> : null}</h4>
              <h5>{data.Plot ? <h5>{data.Plot}</h5> : null}</h5>
              <h4>{data.Awards ? <h4>Awards: {data.Awards}</h4> : null}</h4>
              <h4>{data.Metascore ? <h4>Metascore: {data.Metascore}</h4> : null}</h4>
              <h4>{data.imdbRating ? <h4>IMDb Rating: {data.imdbRating}</h4> : null}</h4>
          </div>
          <div>
              <img src={data.Poster}/>
          </div>
      </div>
    </div>
  );
}

export default App;

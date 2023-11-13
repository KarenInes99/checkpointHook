import React, { useState } from 'react';
import FilmCard from './FilmCard';
import Filter from './Filter';
import FilmList from './MovieList';

function App() {
  const [films, setFilms] = useState([
    {
      title: 'Film 1',
      description: 'Description du Film 1',
      posterURL: './images/28406.webp',
      rating: 7.5,
    },
    {
      title: 'Film 2',
      description: 'Description du Film 2',
      posterURL: './images/28406.webp',
      rating: 8.0,
    },
  ]);

  const [filteredFilms, setFilteredFilms] = useState(films);

  const addFilm = (newFilm) => {
    setFilms([...films, newFilm]);
    setFilteredFilms([...films, newFilm]);
  };

  const filterFilms = ({ title, rating }) => {
    const filtered = films.filter((film) => {
      return film.title.toLowerCase().includes(title.toLowerCase()) && film.note >= rating;
    });
    setFilteredFilms(filtered);
  };

  return (
    <div className="app">
      <h1>Liste de Films</h1>
      <Filter onFilterChange={filterFilms} />
      <button onClick={() => filterFilms({ title: '', rating: 0 })}>Effacer le filtre</button>
      <FilmCard title="" description="" posterURL="" note="" />
      <FilmList films={filteredFilms} />
    </div>
  );
}

export default App;


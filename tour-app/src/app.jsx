import React, { useState } from 'react';
import Gallery from '../components/Gallery';
import './styles/styles.css';

function App() {
  // Holds all tour data
  const [tours, setTours] = useState([]);

  // Function to remove a tour (used by TourCard)
  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  return (
    <div className="app">
      <h1>Tour Comparison App</h1>
      {/* Pass state and handlers to Gallery */}
      <Gallery tours={tours} setTours={setTours} removeTour={removeTour} />
    </div>
  );
} // task 1 Root Component



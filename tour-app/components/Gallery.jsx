import React, { useEffect, useState } from 'react';
import TourCard from './TourCard';

const url = "https://course-api.com/react-tours-project";

function Gallery({ tours, setTours, removeTour }) {
  // Local state for loading and error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tour data on component mount
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch tours.");
        }
        const toursData = await response.json();
        setTours(toursData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTours();
  }, [setTours]);

  if (loading) {
    return <div className="status">Loading...</div>;
  }

  if (error) {
    return <div className="status error">Error: {error}</div>;
  }

  return (
    <section className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={removeTour} />
      ))}
    </section>
  );
}

//task 2 tour list conmponent
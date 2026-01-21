import React from "react";
import movies from "../data/movies";
import { Link } from "react-router-dom";

function MovieList() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Movie List</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 columns
          gap: "20px",
          justifyItems: "center", // center content in grid
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              textAlign: "center",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{
                width: "150px", // fixed width
                height: "200px", // fixed height
                objectFit: "cover", // keep aspect ratio
                borderRadius: "4px",
              }}
            />
            <h4>{movie.title}</h4>
            <Link to={`/movie/${movie.id}`}>
              <button style={{ padding: "5px 10px", cursor: "pointer" }}>
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;

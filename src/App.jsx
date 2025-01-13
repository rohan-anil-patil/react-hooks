import React from "react";
import useFetch from "./Hooks/useFetch";
import Card from "./components/Card";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch("https://picsum.photos/v2/list");

  if (loading) {
    return <p className="loading-error">Loading...</p>;
  }

  if (error) {
    return <p className="loading-error">Error: {error.message}</p>;
  }

  console.log(data);

  return (
    <div className="app">
      <h1>Photo</h1>
      <div className="card-container">
        {data.map((item) => (
          <Card
            key={item.id}
            author={item.author}
            download_url={item.download_url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

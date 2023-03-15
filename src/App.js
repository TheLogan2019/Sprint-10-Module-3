import { connect } from "react-redux";
import "./App.css";
import GifList from "./Components/GifList";
import GifForm from "./Components/GifForm";
import React, { useEffect } from "react";
import { getGifs } from "./Actions";

function App(props) {
  const { loading, error, getGifs } = props;

  useEffect(() => {
    getGifs("dogs");
  }, []);

  return (
    <div className="App">
      <h1>Search for Gifs</h1>
      <GifForm />

      {error !== "" && <h3>{error}</h3>}

      {loading ? <h3>We are loading</h3> : <GifList />}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getGifs })(App);

import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {loadTemps} from "./actions/action";
import FetchTemp from './components/temps';

function App(props) {
  const {loadTemps, loading, errorMessage} = props
  
  useEffect(() => {
    loadTemps();
  },[loadTemps])

  return (
    <div className="App">
      <header className="App-header">
      <h1>Mars Temperatures</h1>
      </header>
      {!loading ? <FetchTemp/> : (<div className="loading">...Loading Temperatures</div>)}
      {errorMessage !== null ? <div>{errorMessage}</div> : null}
      
    </div>
  );
}

function mapStateToProps(state){
  return{
    loading: state.loading,
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, {loadTemps}) (App);

import React from 'react';
import './App.css';

function Aggregate() {
    return (
        <div style={{width: "40%", display: "inline-block"}}
             className="aggregate"
        >
            <h2>Number Text</h2>
        </div>
    );
}

function Filter() {
    return (
        <div>
            <input type="text"/>
            Filter
        </div>
    );
}

function Playlist() {
    return (
        <div style={{width:"25%", display:"inline-block"}}>
            <h3>Playlist Name</h3>
            <ul>
                <li>Song 1</li>
                <li>Song 2</li>
                <li>Song 3</li>
            </ul>
        </div>
    );
}

function App() {
  return (
    <div className="App">
      <h1>Title</h1>
      <Aggregate/>
      <Aggregate/>
      <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
    </div>
  );
}

export default App;

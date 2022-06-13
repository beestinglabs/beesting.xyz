import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>beesting labs</h1>
        <p class="small-text">makes software and hardware for audio etc.</p>
        <p class="small-text">it is run and founded by:</p>
        <p><a class="App-link" href="https://norahlorway.com">dr norah lorway</a> + <a class="App-link" href="https://edpowley.com">dr ed powley</a> + <a class="App-link" href="https://arthurwilson.xyz">arthur wilson</a></p>
        <p class="small-text">here's what we're working on right now:</p>
        <h2>scorch</h2>
        <p class="small-text">a domain-specific programming language for music and sound, integrating with your existing DAW and synth plugins</p>
        <p class="small-text"><a href="https://www.scorch.live/">website</a></p>
        <h2>hiveSynth</h2>
        <p class="small-text">a virtual modular analogue synthesiser with a unique virtual/augmented/mixed reality interface</p>
        <div class="col-12 video-container">
          <div class="embed-responsive embed-responsive-16by9 text-center">
            <iframe class="embed-responsive-item video" src="https://player.vimeo.com/video/336929104" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

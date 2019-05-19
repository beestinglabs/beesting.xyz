import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>beesting labs</p>
        <p class="small-text">makes software and hardware for audio etc.</p>
        <p class="small-text">it is run and founded by:</p>
        <p><a class="App-link" href="https://norahlorway.com">dr norah lorway</a> + <a class="App-link" href="https://edpowley.com">dr ed powley</a></p>
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

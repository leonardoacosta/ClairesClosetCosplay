import React from 'react';
import Windrunner from "./Windrunner";

function App() {
  return (
    <div >
      <div className="jumbotron splashImage" >
        <div className="container text-center">
          <h1 className="display-4">Claire's Closet Cosplay</h1>
          <p className="text-white"><i class="fas fa-angle-double-down"></i>River Rifley</p>
          
        </div>
      </div>
      <div className="divider"></div>
      <Windrunner/>
    </div>
  );
}

export default App;

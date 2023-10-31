
import React from 'react';
 
const Home = () => {
    return (
        <div className="container">
          
          <div className="imgCon">
            <img class="left" src="pumpkin.png" alt="pumpkin"></img>
            <img class="right" src="pumpkin.png" alt="pumpkin"></img>
          </div>
          <h1>{'Kyle McRae'}</h1>
          <div className="imgCon">
            <img class="left" src="pumpkin.png" alt="pumpkin"></img>
            <img class="right" src="pumpkin.png" alt="pumpkin"></img>
          </div>
          <div className="main">
            <p>I'm Kyle, and I am a seattle based software developer who graduated from Cal Poly. Welcome to my (seasonally decorated) website! It is entirely serverless, created in react, and hosted using AWS amplify.</p>
          </div>
        </div>
      );
};
 
export default Home;


import React from 'react';
 
const Home = () => {
    return (
        <div className="container">
          <br></br>
          <div className="imgCon">
            <img class="left" src="pumpkin.png" alt="pumpkin"></img>
            <img class="right" src="pumpkin.png" alt="pumpkin"></img>
          </div>
          <h1>{'About Me'}</h1>
          <div className="imgCon">
            <img class="left" src="pumpkin.png" alt="pumpkin"></img>
            <img class="right" src="pumpkin.png" alt="pumpkin"></img>
          </div>
          <div className="main">
            <p>I'm Kyle, and I am a Seattle based software developer who graduated from Cal Poly. Welcome to my (seasonally decorated) website! It is entirely serverless, created in React, and hosted using AWS Amplify.</p>
            <p>In highschool, I was the lead programmer on my FRC team, 3070 Pronto, and I interned at my school's IT department. I then moved on to Cal Poly, where I got a computer science degree while also working part time as a software developer at Amazon.
            </p>
          </div>
        </div>
      );
};
 
export default Home;

import React from 'react';
import './blog.css'
const Blog = () => {
  return (
    <div className="container">
      <h1>{'Blog'}</h1>
      <div className='post'>
        <h2>11/1/2023 - myFirstBlogPost</h2>
        <p>Welcome to my blog! As of now, this is the only post, but I plan on updating it with fun tech projects or interesting developments in the tech world, but it will evolve as it grows. My biggest project right now is this website. I've never used AWS amplify and also never handled a full react project solo so it is proving to be a fun and very educational experience as well. In other news, halloween was yesterday and I carved a very handsome pumpkin for my porch.</p>
        <img className="blogimg" src="mypumpkin.jpg" alt="pumpkin"></img>
      </div>
    </div>
  );
};

export default Blog;

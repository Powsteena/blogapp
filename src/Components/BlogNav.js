import React from 'react';
import { Link } from 'react-router-dom';

const BlogNav = () => {
  return (
    <nav>
      <div className="logo">
        <img src="" alt="Logo" />
        <span>Blog Platform</span>
      </div>
      <div className="right-side">
        <div className="links">
          <Link to="/post1">JavaScript</Link>
          <Link to="/post2">Data Structure</Link>
          <Link to="/post3">Algorithm</Link>
          <Link to="/post4">Computer Network</Link>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </nav>
  );
}

export default BlogNav;

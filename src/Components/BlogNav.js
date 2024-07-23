import React from 'react';

const BlogNav = () => {
  return (
    <nav>
      <div className="logo">
        <img src="" alt="Logo" />
        <span>Blog Platform</span>
      </div>
      <div className="right-side">
      <div className="links">
        <a href="#post1">JavaScript</a>
        <a href="#post2">Data Stucture</a>
        <a href="#post3">Alogorithm</a>
        <a href="#post4">Computer Network</a>
  
        <input type="text" placeholder="Search..." />
      </div>
      </div>
    </nav>
  );
}

export default BlogNav;

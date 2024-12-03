"use client"
// components/Header.js
import { useState } from 'react';

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">Job Board</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li><a>My Network</a></li>
          <li><a>Jobs</a></li>
          <li><a>Messaging</a></li>
          <li><a>Notifications</a></li>
          <li><a>Me</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

